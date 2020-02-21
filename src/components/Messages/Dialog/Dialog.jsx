import React from 'react';
import style from './Dialog.module.css';
import avatar from './../../../avatar.jpg';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (

        <div className={style.item}>
            <div className={style.userAvatar}>
                <NavLink to='/profile'>
                    <img src={avatar} alt="" />
                </NavLink>
            </div>

            <div className={style.dialog}>
                <NavLink to={path}>

                    <div className={style.userName}>{props.userName}</div>

                    <div className={style.dialogLink}>
                        Message: {props.lastMessage}
                    </div>
                </NavLink>
            </div>

        </div>
    )
}

export default Dialog;