import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import { newPostActionCreator, updatePostActionCreator } from '../../../redux/state';


const Posts = (props) => {
    let postsData = props.profile.postsData;
    let postList =
        postsData.map(el => <Post userName={el.name} message={el.message} likesCounter={el.likesCounter} />)

    let link = React.createRef()

    let createPost = () => {
        let text = link.current.value;
        props.dispatch(newPostActionCreator(text));
    }

    let onPostChange = () => {
        let text = link.current.value;
        props.dispatch(updatePostActionCreator(text))
    }

    return (
        <div className={style.posts}>
            <div className={style.newPost}>
                <textarea onChange={onPostChange}
                    ref={link}
                    value={props.profile.newPostText} />
                <button onClick={createPost}>New post</button>
            </div>
            {postList}
        </div>
    )
}

export default Posts;