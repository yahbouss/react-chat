const express = require('express')
const app = express()
const http = require('http')
const socketio = require("socket.io")

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
  socket.on('join',({user})=>{
    const message= `${user} just joined the room`
    console.log(message)
    io.emit('message', {message})
  })
  socket.on('sendMessage',(message)=>{
    io.emit('message',(message))
    console.log(message)
  })
  
})


 
server.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})