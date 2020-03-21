import { createStore, combineReducers } from "redux";
import dialogsReducer from "./messages-reducer";
import postsReducer from "./profile-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    messages: dialogsReducer,
    profile: postsReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;