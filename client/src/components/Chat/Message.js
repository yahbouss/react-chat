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