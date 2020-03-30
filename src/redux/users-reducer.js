import { usersAPI } from './../api/api'

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let GET_TOTAL_USERS = "GET_TOTAL_USERS";
let TOGGLE_LOADER = "TOGGLE_LOADER";
let TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
    usersData: [],
    totalUsers: 0,
    onOnePage: 18,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    } else
                        return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page
            }
        }

        case GET_TOTAL_USERS: {
            return {
                ...state, totalUsers: action.totalUsers
            }
        }

        case TOGGLE_LOADER: {
            return {
                ...state, isLoading: action.isLoading
            }
        }

        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
    }
    return state;
}

export const usersFollow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const usersUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setPagesCounter = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export const getTotalUsers = (totalUsers) => {
    return {
        type: GET_TOTAL_USERS,
        totalUsers
    }
}

export const toggleLoader = (isLoading) => {
    return {
        type: TOGGLE_LOADER,
        isLoading
    }
}

export const toggleFollowingProgress = (followingInProgress, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    }
}

export const initialUserlistRender = (onOnePage, currentPage) => {
    return (dispatch) => {
        dispatch(toggleLoader(true));
        usersAPI.getUsers(onOnePage, currentPage)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(getTotalUsers(data.totalCount))
                dispatch(toggleLoader(false));
            })
    }
}

export default usersReducer;