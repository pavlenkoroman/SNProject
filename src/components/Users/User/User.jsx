import React from 'react';
import style from './user.module.css'
import { NavLink } from 'react-router-dom';
const User = (props) => {

    
    return(
        <div className={style.user}>
            <div className={style.userAvatar}><img src={props.avatar} alt=""/></div>
    <div className={style.userName}><NavLink to='/users'>{props.name}</NavLink></div>
            <div className={style.mutualFriends}><NavLink to='/users'>Mutual friends: {props.mutualFriends}</NavLink></div>
        </div>
    )
}

export default User;