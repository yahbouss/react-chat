import './Chat.scss'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

import chatHead from '../../assets/head.svg'
import attachImage from './assets/image.svg'
import attachFile from './assets/attach.svg'
import Send from './assets/send.svg'

import {Reciever, Sender} from './Message'

const ENDPOINT = "http://localhost:5000"
let socket

const user= 'yahia'

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

const Chat = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit('join',{user},(error)=>error?console.log(error):console.log('connected'))
    }, [])

    useEffect(() => {
        socket.on('message',({message,type})=> setMessages([...messages, {type, message}]))
    })

    const messageSend = () =>{
        if (!isEmptyOrSpaces(message)){
            setMessages([...messages, {type:0, message}])
            socket.emit('sendMessage', {type:3, message})
            setMessage('')}
    }

    return (
        <div className='chat'>
            <div className="chat__users">
                <div className="chat__users-user">
                    <div className="chat__users-user-circle">
                        <img src={chatHead} alt='.' />
                    </div>
                    <h2>User</h2>
                </div>
            </div>
            <div className="chat__container">

                <div className="chat__messages">
                    {messages.map(mes=>{
                        return( mes.type===0 ? <Sender name='yahia' message={mes.message}/> : <Reciever name='sender' message={mes.message}/> )
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
