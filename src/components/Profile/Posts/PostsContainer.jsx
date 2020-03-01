import React from 'react';
import Posts from './Posts';
import { newPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';


const PostsContainer = (props) => {

    let state = props.store.getState();

    let createPost = (text) => {
        debugger;
        props.store.dispatch(newPostActionCreator(text));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text))
    }
    return (<Posts createPost={createPost} onPostChange={onPostChange} state={state}/>)
}

export default PostsContainer;