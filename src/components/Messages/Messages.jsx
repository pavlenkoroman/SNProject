import React from 'react';
import style from './Messages.module.css';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {
    let messageList = props.state.messages.messagesData.map(m => <Dialog id={m.id} userName={m.name} lastMessage={m.lastMessage}/>)
    let dialogLink = React.createRef();

    let updateDialog = () => {
        let text = dialogLink.current.value;
        props.onDialogChange(text)
    }

    let addDialog = () => {
        let text = dialogLink.current.value;
        props.createDialog(text)
    }
    
   
    return (
        <div className={style.messages}>
            {messageList}
            <textarea ref={dialogLink} onChange={updateDialog}></textarea>
            <button onClick={addDialog}>Tap</button>
        </div>
    )
}

export default Messages;