import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


let rerenderTree = ()=> {
    ReactDOM.render(<App
        store={store}
        getState={store.getState()}
        dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root'));
}


store.subscribe(rerenderTree);

store.rerenderTree();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.unregister();
