<template>
  <div class="chat-list-wrapper" style="height: 80%">
    <div>
      <div class="messages-list">
        <Message
          v-for="(message, id) in messages"
          :key="id"
          :name="message.name"
          :text="message.text"
          :owner="message.id === user.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from '../components/Message'

export default {
  name: 'Chat',
  components: {
    Message
  },
  middleware: ['chat'],
  computed: { ...mapState(['user']), ...mapState(['messages']) }
}
</script>

<style scoped>
  .chat-list-wrapper{
    width: 40%;
  }
  .messages-list {
    height: 60%;
    position: relative;
    overflow: hidden;
  }
</style>
