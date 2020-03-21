<template>
  <div>
    {{ text }}
    <el-input
      v-model="text"
      clacc="chat-input"
      :rows="4"
      placeholder="Please input message"
      @change="send"
    />
  </div>
</template>

<script>
export default {
  name: 'ChatForm',
  data: () => ({
    text: ''
  }),
  methods: {
    send () {
      this.$socket.emit('clickMessage', {
        text: this.text,
        id: this.$store.state.user.id
      },
      (data) => {
        const { type, message } = data

        if (type || message) {
          console.error(type, message)
        } else {
          this.text = ''
        }
      })
    }
  }
}
</script>

<style scoped>
  .chat-input{
    width: 100%;
    height: 100%;
  }

</style>
