import { usersAPI, profileAPI } from './../api/api'

const NEW_POST = "NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    postsData: [
        { id: 1, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 28 },
        { id: 2, name: 'Anonimous', message: "Hack the system!", likesCounter: 22 },
        { id: 3, name: 'Fan', message: "Awesome!", likesCounter: 30 },
        { id: 4, name: 'Fan2', message: "Nice avatar!", likesCounter: 0 },
        { id: 5, name: 'SchoolBoy', message: "Nice avatar! ", likesCounter: 2 },
        { id: 6, name: 'Roman Pavlenko', message: "Let's do it!", likesCounter: 20 }
    ],
    profileInfo: null,
    statusText: null
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
            return { ...state, postsData: [...state.postsData, newPostData]};

        }

        case SET_USER_PROFILE: {
            return {
                ...state, profileInfo: action.profileInfo
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state, statusText: action.statusText
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

export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo
    }
}

export const setUserStatus = (statusText) => {
    return {
        type: SET_USER_STATUS,
        statusText
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

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(
                (response) => {
                    dispatch(setUserStatus(response.data))
                })
    }
}

export const updateStatus = (statusText) => {
    return (dispatch) => {
        profileAPI.sendStatus(statusText)
            .then(
                (response) => {
                    if (response.resultCode === 0) 
                    dispatch(setUserStatus(statusText))
                }
            )
    }
}

export default postsReducer;