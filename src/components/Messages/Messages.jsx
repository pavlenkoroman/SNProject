import React from 'react';
import style from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import { newDialogActionCreator, updateDialogActionCreator } from '../../redux/state';

const Messages = (props) => {

    let messageList = props.state.messages.messagesData.map(m => <Dialog id={m.id} userName={m.name} lastMessage={m.lastMessage}/>)

    let dialogLink = React.createRef();

    let createDialog = () => {
        let text = dialogLink.current.value;
        props.dispatch(newDialogActionCreator(text))
    }

    let onDialogChange = () => {
        let text = dialogLink.current.value;
        props.dispatch(updateDialogActionCreator(text));
    }

    return (
        <div className={style.messages}>
            {messageList}
            <textarea ref={dialogLink} onChange={onDialogChange}></textarea>
            <button onClick={createDialog}>Tap</button>
        </div>
    )
}

export default Messages;