import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./messages-reducer";
import postsReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    messages: dialogsReducer,
    profile: postsReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;