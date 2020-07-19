import React from 'react';
import { reduxForm, Field } from 'redux-form'
import { useState } from 'react';
import { useEffect } from 'react';

const StatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)

    let [statusText, setStatusText] = useState(props.statusText)

    useEffect(() => {
        setStatusText(props.statusText)
    }, [props.statusText])

    const activateEditMode = () => [
        setEditMode(true)
    ]

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusText)
    }

    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <div>
                <span onClick={activateEditMode}>{props.statusText? props.statusText : "you have no status"}</span>
            </div>}

            {editMode && <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={statusText}></input>}
        </div>
    )
}

export default StatusHook;