import React from 'react';
import style from './Messages.module.css';
import avatar from './../../avatar.jpg';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {

    let messageList = props.messagesData.map(m => <Dialog id={m.id} userName={m.name} lastMessage={m.lastMessage}/>)

    return (
        <div>
            {messageList}
        </div>
    )
}

export default Messages;