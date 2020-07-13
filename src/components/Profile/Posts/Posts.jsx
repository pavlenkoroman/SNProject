import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


const Posts = (props) => {
    let postList = props.postsData.map(el => <Post userName={el.name} message={el.message} likesCounter={el.likesCounter} />)

    let addPost = (values) => {
        props.newPost(values.postText) 
        debugger
    }

    return (
        <div>
        <ReduxPostForm onSubmit={addPost}/>
            {postList}
        </div>
    )
}

let postForm = (props) => {
    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="postText"></Field>
            <button>click</button>
        </form>
        </>
    )
}

let ReduxPostForm = reduxForm({form: "addPost"})(postForm)

export default Posts;