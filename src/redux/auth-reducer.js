import { authAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

let SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.authData
            }
        }}
    return state;
}

export const setAuthData = (id, email, login, isLoggedIn) => {
    return {
        type: SET_AUTH_DATA,
        authData: { id, email, login, isLoggedIn }
    }
}

export const makeAuth = () => {
    return (dispatch) => {
       
       return authAPI.authRequest()
            .then(
                (response) => {
                    if (response.resultCode === 0){
                    dispatch(setAuthData(response.data.id, response.data.email, response.data.login, true))
                }
            })}
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginRequest(email, password, rememberMe)
            .then(
                (response) => {
                    if (response.data.resultCode === 0){
                        dispatch(makeAuth())
                    }
                    else {
                        dispatch(stopSubmit( "login", {_error: response.data.messages[0] }))
                    }
                }
            )
    }
}

export const logout = () => {
    return (dispatch) => {

        authAPI.logoutRequest()
            .then(
                (response) => {
                    if (response.data.resultCode === 0){
                        dispatch(setAuthData(null, null, null, false))
                    }
                }
            )
    }
}


export default authReducer;