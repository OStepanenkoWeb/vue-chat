<template>
  <el-container class="full-height">
    <el-main>
      <el-row class="full-height">
        <el-col>
          <ul class="messages-list">
            {{ messages }}
            <Message
              v-for="(message, id) in messages"
              :key="id"
              :name="message.name"
              :text="message.text"
              :owner="message.id === user.id"
            />
          </ul>
          <div class="push-form">
            <ChatForm />
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import Message from '../components/Message'
import ChatForm from '../components/ChatForm'

export default {
  name: 'Chat',
  components: {
    Message,
    ChatForm
  },
  middleware: ['chat'],
  computed: { ...mapState(['user']), ...mapState(['messages']) }
}
</script>

<style scoped>
.push-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;

}
  .messages-list {
    height: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
