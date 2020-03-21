<template>
  <div class="container">
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span><h1>Vue chat</h1></span>
        </div>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :label-position="labelPosition"
          label-width="100px"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item label="Your Name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Your Room" prop="room">
            <el-input v-model="ruleForm.room" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">
              Entry
            </el-button>
            <el-button @click="resetForm('ruleForm')">
              Reset
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_USER } from '../store/mutationConst'

export default {
  layout: 'empty',
  data () {
    return {
      labelPosition: 'right',
      ruleForm: {
        name: '',
        room: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
          { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' }
        ],
        room: [
          { required: true, message: 'Please input name your room', trigger: 'blur' }
        ]
      }
    }
  },
  head () {
    return {
      title: 'Vue-chat'
    }
  },
  sockets: {
    connect () {
      console.log('Client IO connected...')
    }
  },
  methods: {
    ...mapMutations([SET_USER]),
    pushMessage () {
      this.$socket.emit('clickMessage', {
        text: 'Click'
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const user = {
            name: this.ruleForm.name,
            room: this.ruleForm.room
          }

          this.$socket.emit('userJoined', user, (data) => {
            const { type, message, userId } = data
            if (type || message) {
              console.error(type, message)
            } else {
              user.id = userId
              this.SET_USER(user)
              this.$router.push('/chat')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
