import React from 'react';
import style from './FormElements.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let validatorWorked = meta.touched && meta.error;
    return (
        <div>
            <textarea cols="30" {...input} {...props} className={(validatorWorked? style.inputError : "")}/>
            {validatorWorked ? <div className={style.error}>{meta.error}</div>: ""}
        </div>
    )
} 
