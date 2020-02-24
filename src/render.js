import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPost} from './redux/state';


export const rerenderTree = (state) => {
    ReactDOM.render(<App
        messagesData={state.messages.messagesData}
        postsData={state.profile.postsData}
        newPost={newPost}
         />, document.getElementById('root'));
}