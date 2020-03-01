import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import { newPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';


const Posts = (props) => {
    let postList = props.state.profile.postsData.map(el => <Post userName={el.name} message={el.message} likesCounter={el.likesCounter} />)

    let postsLink = React.createRef()
    
    let onUpdatePost = () => {
        let text = postsLink.current.value;
        props.onPostChange(text)
    }

    let addPost = () => {
        let text = postsLink.current.value;
        props.createPost(text)
    }

    return (
        <div className={style.posts}>
            <div className={style.newPost}>
                <textarea onChange={onUpdatePost}
                    ref={postsLink}
                    value={props.state.profile.newPostText} />
                <button onClick={addPost}>New post</button>
            </div>
            {postList}
        </div>
    )
}

export default Posts;