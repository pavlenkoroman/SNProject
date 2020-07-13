import React from 'react';
import style from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utilities/validators';
import { Textarea } from '../../common/formElements/FormElements';

const Messages = (props) => {
    let messageList = props.messagesData.map(m => <Dialog id={m.id} userName={m.name} lastMessage={m.lastMessage} />)

    let addNewMessage = (values) => {
        props.createDialog(values.dialogText)
    }
 
    return (
        <div className={style.messages}>
            {messageList}
            <AddDialogReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

let maxLength10 = maxLength(10);

const addDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="dialogText" validate={[required, maxLength10]} placeholder="text"/>
            <button>click</button>
        </form>
    )
}

const AddDialogReduxForm = reduxForm({form: "addDialog"})(addDialogForm)

export default Messages;