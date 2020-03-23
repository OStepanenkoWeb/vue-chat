const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)
const userManager = require('./usersManager')()

const buildMessage = (name, text, id) => ({ name, text, id })

io.on('connection', (socket) => {
  console.log('IO connected...')

  socket.on('userJoined', ({ name, room }, res) => {
    if (!name || !room) {
      return res({ type: 'error', message: 'Data incorrect...' })
    }

    socket.join(room) // add user to room

    userManager.remove(socket.id)

    userManager.add({
      id: socket.id,
      name,
      room
    })

    res({ userId: socket.id })
    io.to(room).emit('updateUsers', userManager.getByRoom(room))
    socket.emit('newMessage', buildMessage('admin', `${name} Welcome to vue-chat... 0/`))
    socket.broadcast
      .to(room)
      .emit('newMessage', buildMessage('admin', `User ${name} joined the chat (--) /`))
  })
  socket.on('clickMessage', (data, res) => {
    if (!data.text) {
      return res('Message cannot be empty')
    }

    const user = userManager.get(data.id)

    if (user) {
      io.to(user.room).emit('newMessage', buildMessage(user.name, data.text, data.id))
    }

    res({})
  })

  socket.on('userLeft', (id, res) => {
    const user = userManager.remove(id)

    if (user) {
      io.to(user.room).emit('updateUsers', userManager.getByRoom(user.room))
      io.to(user.room).emit('newMessage', buildMessage('admin', `User ${user.name} left chat`))
    }
    res()
  })

  socket.on('disconnect', () => {
    const user = userManager.remove(socket.id)

    if (user) {
      io.to(user.room).emit('updateUsers', userManager.getByRoom(user.room))
      io.to(user.room).emit('newMessage', buildMessage('admin', `User ${user.name} left chat`))
    }
  })
})

module.exports = {
  app, server
}
