import React from 'react';
import avatar from './../../../avatar.jpg';
import PostsModule from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div classname={PostsModule.posts}>
            <Post userName='Roman Pavlenko' message="Let's do it!" likesCounter='20'/>
            <Post userName='Anonimous' message='Hack the system!' likesCounter='10'/>
            <Post userName='Navi fan' message='Awesome!' likesCounter='11'/>
            <Post userName='VP fan' message='Nice avatar!' likesCounter='9'/>
            <Post userName='ScoolBoy' message='where is my textbook?!' likesCounter='5'/>
        </div>
    )
}

export default Posts;