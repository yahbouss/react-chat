const express = require('express')
const app = express()
const http = require('http')
const socketio = require("socket.io")

let users = []

const server = http.createServer(app)
const io = socketio(server,{
  cors:{
    origin:'*'
  }
})

const port = 5000 | process.env.PORT

app.get('/', (req, res) => {
  res.send('connected')
})

io.on('connection', (socket) => {
  socket.on('join',({name})=>{
    const message= `${name} just joined the room`
    console.log(message)
    users.push(name)
    name = "admin"
    io.emit('join', {name, message, users})
  })
  socket.on('sendMessage',({name, message})=>{
    socket.broadcast.emit('message',({name, message}))
    console.log({name, message})
  })
  
})


 
server.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})