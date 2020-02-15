import React from 'react';
import avatar from './../../../avatar.jpg';
import PostsModule from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div classname={PostsModule.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;