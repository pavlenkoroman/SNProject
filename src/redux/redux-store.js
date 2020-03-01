import { createStore, combineReducers } from "redux";
import dialogsReducer from "./messages-reducer";
import postsReducer from "./profile-reducer";

let reducers = combineReducers({
    messages: dialogsReducer,
    profile: postsReducer
});

let store = createStore(reducers);

export default store;