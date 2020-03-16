import { createStore, combineReducers } from "redux";
import dialogsReducer from "./messages-reducer";
import postsReducer from "./profile-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
    messages: dialogsReducer,
    profile: postsReducer,
    users: usersReducer
});

let store = createStore(reducers);

export default store;