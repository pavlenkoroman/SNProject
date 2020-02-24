import React from 'react';
import avatar from './../../../../avatar.jpg';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.userInfo}>
                <img src={avatar} />
                <span>{props.userName}</span>
            </div>
            <div className={style.text}>{props.message}</div>
            <div className={style.likeButton}>{props.likesCounter} likes</div>
        </div>
    )
}

export default Post;