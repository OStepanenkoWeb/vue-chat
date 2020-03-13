const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('IO connected...')
  socket.on('clickMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', data.text + 'SERVER')
    })
  }, 500)
})

module.exports = {
  app, server
}
