import { usersAPI } from './../api/api'

const NEW_POST = "NEW-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [
        { id: 1, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 28 },
        { id: 2, name: 'Anonimous', message: "Hack the system!", likesCounter: 22 },
        { id: 3, name: 'Fan', message: "Awesome!", likesCounter: 30 },
        { id: 4, name: 'Fan2', message: "Nice avatar!", likesCounter: 0 },
        { id: 5, name: 'SchoolBoy', message: "Nice avatar! ", likesCounter: 2 },
        { id: 6, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 20 }
    ],
    newPostText: "da",
    profileInfo: null
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST: {
            let newPostData = {
                id: 7,
                name: 'Roman Pavlenko',
                message: action.postText,
                likesCounter: 0
            };
            return { ...state, postsData: [...state.postsData, newPostData], newPostText: '' };

        }

        case UPDATE_POST: {
            return { ...state, newPostText: action.newText };
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profileInfo: action.profileInfo
            }
        }
    }

    return state;

}

export const newPost = (text) => {
    return {
        type: NEW_POST,
        postText: text
    };
}

export const updatePost = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    };
}

export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo
    }
}

export const getProfile = (userID) => {
    return (dispatch) => {
        usersAPI.getProfileRequest(userID)
            .then(
                (response) => {
                    dispatch(setUserProfile(response.data));
                }
            )
    }
}

export default postsReducer;