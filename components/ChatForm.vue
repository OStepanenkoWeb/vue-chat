<template>
  <div>
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
      const { text } = this
      const { id } = this.$store.state.user

      this.$socket.emit('clickMessage', {
        text,
        id
      },
      (data) => {
        const { type, message } = data

        if (type || message) {
          console.error(type, message)
        } else {
          window.scrollTo({
            top: 1000,
            behavior: 'smooth'
          })
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
