import React from 'react';
import PostsModule from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {
    let postList = props.p.map( p => <Post userName={p.name} message={p.message} likesCounter={p.likesCounter}/>)

    return (
        <div classname={PostsModule.posts}>
           {postList}
        </div>
    )
}

export default Posts;