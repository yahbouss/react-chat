import './Join.scss'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState('')
  return (
    <>
      <div className="box">
          <h1 className="box__title">Welcome to MyChatApp</h1>
          
          <div className="box__name">
              <h2 className="box__name-title">Name</h2>
              <input 
              placeholder='Joe Biden'
              value={name}
              onChange={e=>setName(e.target.value)}
              className="box__name-input"/>
          </div>
          <Link onClick={e=>(!name)? e.preventDefault() : null} to={`/chatroom?name=${name}`}>
            <button className="box__button" type='submit'>Join</button>
          </Link>

      </div>
    </>
  )
}

export default Join
