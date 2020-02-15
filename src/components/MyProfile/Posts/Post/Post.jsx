import React from 'react';
import avatar from './../../../../avatar.jpg';
import './Post.css'

const Post = () => {
    return (
        <div className="posts">
            <img src={avatar} alt="User Name"/>
            <span className="Text">Hey buddy! <br/><br/><br/><br/><br/></span>
      </div>
    )
}

export default Post;