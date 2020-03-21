<template>
  <div style="height: 80%">
    <div>
      <ul class="messages-list">
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
    </div>
  </div>
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
    height: 60%;
    position: relative;
    overflow: hidden;
  }
</style>
