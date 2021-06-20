import chatHead from '../../assets/head.svg'

export const Reciever = (props) =>{
    return(
        <div className="chat__messages-reciever">
            <h2 className="chat__messages-reciever-name">{props.name}</h2>
            <div className="chat__messages-reciever-message">
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}

export const Sender = (props) =>{
    return(
        <div className="chat__messages-sender">
            <h2 className="chat__messages-sender-name">{props.name}</h2>
            <div className="chat__messages-sender-message">
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}

export const UsersList = (props) =>{
    return (
    <div className="chat__users">
        {props.usersList.map(name => (
            <div className="chat__users-user">
            <div className="chat__users-user-circle">
                <img src={chatHead} alt='.' />
            </div>
            <h2>{name}</h2>
        </div>
        ))}
        
    </div>
    )
}