import React from 'react';
import style from './LoginFormElements.module.css'

export const LoginInput = ({ input, meta, ...props }) => {
    const validateIsActive = meta.touched && meta.error
    return (
        <>
            <input {...input} {...props} className={validateIsActive ? style.error : " "} />
            {validateIsActive ?
                <div className={style.hint}>
                    {meta.error}
                </div>
                : undefined}

        </>
    )
}

