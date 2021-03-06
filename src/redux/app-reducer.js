import { makeAuth } from "./auth-reducer";

let SET_INITIALIZATION_STATUS = "APP_REDUCER_SET_INITIALIZATION_STATUS"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZATION_STATUS: {
            return {
                ...state,
                initialized: true
            }
        }
    }
    return state;
}

export const setInitializationStatus = () => { return { type: SET_INITIALIZATION_STATUS } }

export const InitializeApp = () => async (dispatch) => {
    await dispatch(makeAuth())
    dispatch(setInitializationStatus())
}

export default appReducer;