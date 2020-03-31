import { authAPI } from './../api/api';

let SET_AUTH_DATA = 'SET_AUTH_DATA';
let EXTRA_AUTH_USER_DATA = 'EXTRA_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    currentUserAvatar: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.authData
            }
        }

        case EXTRA_AUTH_USER_DATA: {
            return {
                ...state,
                currentUserAvatar: action.currentUserAvatar
            }
        }
    }
    return state;
}


export const setAuthData = (id, email, login, isLoggedIn) => {
    return {
        type: SET_AUTH_DATA,
        authData: { id, email, login, isLoggedIn }
    }
}
export const extraAuthUserData = (image) => {
    return {
        type: EXTRA_AUTH_USER_DATA,
        currentUserAvatar: image
    }
}

export const makeAuth = () => {
    return (dispatch) => {
       
        authAPI.authRequest()
            .then(
                (data) => {
                    if (data.resultCode === 0){
                    dispatch(setAuthData(data.data.id, data.data.email, data.data.login, true))
                    authAPI.extraAuthDataRequest(data.data.id)
                .then(
                    (data) => {
                    dispatch(extraAuthUserData(data.photos.small))
                })
                }
            })}
}


export default authReducer;