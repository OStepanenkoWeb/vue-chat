const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

const buildMessage = (name, text, id) => ({ name, text, id })

io.on('connection', (socket) => {
  console.log('IO connected...')

  socket.on('userJoined', ({ name, room }, res) => {
    if (!name || !room) {
      return res({ type: 'error', message: 'Data incorrect...' })
    }

    socket.join(room)

    res({ userId: socket.id })
    socket.emit('newMessage', buildMessage('admin', `${name} Welcome to vue-chat... 0/`))
    socket.broadcast.to(room).emit('newMessage', buildMessage('admin', `User ${name} joined the chat (--) /`))
  })
  socket.on('clickMessage', (data) => {
    setTimeout(() => {
      socket.emit('newMessage', buildMessage('admin', data.text + 'SERVER'))
    })
  }, 500)
})

module.exports = {
  app, server
}
