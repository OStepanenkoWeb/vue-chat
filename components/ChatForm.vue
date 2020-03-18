<template>
  <input
    v-model="text"
    type="textarea"
    :rows="2"
    placeholder="Please input message"
    @keydown.enter="send"
  >
</template>

<script>
export default {
  name: 'ChatForm',
  data: () => ({
    text: ''
  }),
  methods: {
    send () {
      console.log(this.text)

      this.$socket.emit('clickMessage', {
        text: this.text,
        id: this.$store.state.user.id
      },
      (data) => {
        const { type, message } = data

        if (type || message) {
          console.error(type, message)
        } else {
          console.log(4343434)
          this.text = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
