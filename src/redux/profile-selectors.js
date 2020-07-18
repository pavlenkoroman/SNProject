export const getProfileInfo = (state) => {
    return state.profile.profileInfo
}

export const getStatusText = (state) => {
    return state.profile.statusText
}

export const getLoggedInUserId = (state) => {
    return state.auth.id
}

export const isUserLoggedInInfo = (state) => {
    return state.auth.isLoggedIn
}

export const getPostsData = (state) => {
    return state.profile.postsData
}

export const getNewPostText = (state) => {
    return state.profile.newPostText
}
