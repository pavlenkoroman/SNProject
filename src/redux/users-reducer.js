let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let GET_TOTAL_USERS = "GET_TOTAL_USERS";

let initialState = {
    usersData: [],
    totalUsers: 0,
    onOnePage: 18,
    currentPage: 1 
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, usersData: [
                    ...state.usersData.map((u) => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true }
                        }
                    })
                ]
            }
        }

        case UNFOLLOW: {
            return {
                ...state, usersData: [
                    ...state.usersData.map((u) => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                    })
                ]
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
                ...state, totalUsers: action.totalUsers,
            }
        }
    }
    return state;
}

export const usersFollowAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const usersUnfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setPagesCounterAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export const getTotalUsersAC = (totalUsers) => {
    return {
        type: GET_TOTAL_USERS,
        totalUsers
    }
}

export default usersReducer;