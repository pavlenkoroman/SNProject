import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';


let rerenderTree = (state)=> {
    ReactDOM.render(<App
        store={store}
        />, document.getElementById('root'));
}


store.subscribe(rerenderTree);

rerenderTree(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.unregister();
