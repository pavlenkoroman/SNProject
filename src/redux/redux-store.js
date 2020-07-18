import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./messages-reducer";
import postsReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer"
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    messages: dialogsReducer,
    profile: postsReducer,
    users: usersReducer,
    auth: authReducer, 
    form: formReducer,
    app: appReducer 
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;