let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"

let initialState = {
    usersData: [
    
]
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
                ...state, usersData: [
                    ...state.usersData, ...action.users
                ] 
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

export default usersReducer;