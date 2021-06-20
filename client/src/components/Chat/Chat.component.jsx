import './Chat.scss'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'

import attachImage from './assets/image.svg'
import attachFile from './assets/attach.svg'
import Send from './assets/send.svg'

import {Reciever, Sender, UsersList} from './Message'

const ENDPOINT = "http://192.168.1.14:5000"
let socket

let i = 0

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

const Chat = () => {
    const location = useLocation()

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [usersRoom, setUsersRoom] = useState([])

    useEffect(() => {
        setName(queryString.parse(location.search).name)
        socket = io(ENDPOINT)
        socket.on('connection',(socket)=>{
            socket.emit('join',{name},(error)=>error?console.error(error):console.log('connected'))
            socket.on('join',({message, name, users})=>{
                console.log(message)
                setMessages([...messages, {name, message}])
                setUsersRoom([...usersRoom, users])
                
            })
        })
    },[messages, location.search, name, usersRoom])

    useEffect(() => {
        socket.on('message',({message,name})=> {
            setMessages([...messages, {name, message}])
        })
    })

    const messageSend = () =>{
        if (!isEmptyOrSpaces(message)){
            socket.emit('sendMessage', {name, message})
            setMessage('')}

    }

    return (
        <div className='chat'>
            <UsersList usersList={usersRoom}/>
            <div className="chat__container">

                <div className="chat__messages">
                    {messages.map(mes=>{
                        return( mes.name===name ? <Sender key={i++} name={name} message={mes.message}/> : <Reciever key={i++} name={mes.name} message={mes.message}/> )
                    })}
                </div>
                <div className="chat__input">
                    <input
                        className='chat__input-box'
                        value={message}
                        type="text"
                        placeholder='type...'
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={e => {if (e.key==='Enter'){messageSend()}}}
                    />
                    <div className="chat__input-box-btns">
                        <img src={attachImage} alt="attachImage" className="icon image-attach" />
                        <img src={attachFile} alt="img attachFile" className="icon attach" />
                        <img src={Send} alt="Send" className="icon send" onClick={messageSend} />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Chat
