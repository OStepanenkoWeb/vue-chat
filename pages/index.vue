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
  mounted () {
    const { message } = this.$route.query

    if (message === 'noUser') {
      this.$message('Please, input data')
    } else if (message === 'leftChat') {
      this.$message('You left the chat')
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
            } else {
              user.id = userId
              this.SET_USER(user)
              this.$router.push('/chat')
            }
          })
        } else {
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
  margin-bottom: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
