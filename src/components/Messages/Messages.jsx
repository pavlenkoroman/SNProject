import React from 'react';
import style from './Messages.module.css';
import avatar from './../../avatar.jpg';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {

    let messageList = props.messagesData.map(m => <Dialog id={m.id} userName={m.name} lastMessage={m.lastMessage}/>)

    let postLink = React.createRef();

    let newPost =  props.newPost;

    let messageAlert = () => {
        let text = postLink.current.value;
       alert(text);
    }

    return (
        <div className={style.messages}>
            {messageList}
            <textarea ref={postLink}></textarea>
            <button onClick={messageAlert}>Tap</button>
        </div>
    )
}

export default Messages;