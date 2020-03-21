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
                ...action.authData, isLoggedIn: true
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


export const setAuthData = (id, email, login) => {
    return {
        type: SET_AUTH_DATA,
        authData: { id, email, login }
    }
}
export const extraAuthUserData = (image) => {
    return {
        type: EXTRA_AUTH_USER_DATA,
        currentUserAvatar: image
    }
}


export default authReducer;