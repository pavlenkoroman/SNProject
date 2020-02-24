import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {
    let postList = props.p.map(p => <Post userName={p.name} message={p.message} likesCounter={p.likesCounter} />)
    let link = React.createRef()
    let createPost = () => {
        let text = link.current.value;
        props.newPost(text);
    }

    return (
        <div classname={style.posts}>
            <div className={style.newPost}>
                <textarea ref={link}></textarea>
                <button onClick={createPost}>New post</button>
            </div>
            {postList}
        </div>
    )
}

export default Posts;