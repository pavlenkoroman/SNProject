import React from 'react';
import style from './user.module.css'
import { NavLink } from 'react-router-dom';
const User = (props) => {
    return(
        <div className={style.user}>
         <NavLink to={'/profile/' + props.id}>  <div className={style.userAvatar}><img src={props.avatar} alt=""/></div></NavLink> 
    <div className={style.userName}><NavLink to={'/profile/' + props.id}>{props.name}</NavLink></div>
        </div>
    )
}

export default User;