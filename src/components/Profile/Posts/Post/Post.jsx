import React from 'react';
import avatar from './../../../../avatar.jpg';
import './Post.css'

const Post = (props) => {
    return (
        <div className="posts">
            <div className='userInfo'>
                <img src={avatar} />
                <span>{props.userName}</span>
            </div>
            <div className="text">{props.message}</div>
            <div className="like-button">{props.likesCounter} likes</div>
        </div>
    )
}

export default Post;