<template>
  <div class="container-layouts">
    <div class="layout-wrapper bg-purple-dark">
      <div class="header">
        <i class="el-icon-back icon-header" @click="exit" />
        <el-dropdown>
          <i class="el-icon-setting icon-header" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Chat room {{ user.room }}</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i class="el-icon-s-fold icon-header" @click="drawer = !drawer" />
      </div>
      <div class="chat-list">
        <nuxt />
      </div>
      <div class="push-form">
        <ChatForm />
      </div>
    </div>
    <el-drawer
      direction="ltr"
      size="25%"
      title="I am the title"
      :visible.sync="drawer"
      :with-header="false"
    >
      <div class="list-chat">
        <div v-for="user in users" :key="user.id" class="list-chat-item" :class="{'bg-purple-dark': user.id === 2}">
          <div>{{ user.name }}</div>
          <div><i class="el-icon-chat-round icon-header" /></div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ChatForm from '../components/ChatForm'
export default {
  components: {
    ChatForm
  },
  data: () => ({
    drawer: false,
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' }
    ]
  }),
  computed: mapState(['user']),
  methods: {
    exit () {
      this.$router.push('/?message=leftChat')
    }
  }
}
</script>

<style>
html, body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
#__nuxt {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.chat-list {
  padding-top: 7%;
  display: flex;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
}
.container-layouts {
  height: 100vh;
  width: 100%;
}
.layout-wrapper {
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
}
.push-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;
}
.header {
  position: fixed;
  z-index: 500;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 7%;
  color: #F5F5F5;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background: #47494E;
  padding: 1rem;
}
.btn-header-menu {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B3C0D1;
  border: none;
  border-radius: 1rem;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}
.list-chat {
  display: flex;
  flex-wrap: wrap;
}
.list-chat-item {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.icon-header {
  margin-right: 15px;
  font-size: large
}

.el-aside {
  color: #333;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 100vh;
}
</style>
