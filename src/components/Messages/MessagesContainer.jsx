import React from 'react';
import style from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import { newDialogActionCreator, updateDialogActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let createDialog = (text) => {
        props.store.dispatch(newDialogActionCreator(text))
    }

    let onDialogChange = (text) => {
        props.store.dispatch(updateDialogActionCreator(text));
    }

    return <Messages createDialog={createDialog} onDialogChange={onDialogChange} state={state}/>
}

export default MessagesContainer;