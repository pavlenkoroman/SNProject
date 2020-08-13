export const getUsersData = (state) => {
    return state.users.usersData
}

export const getUserlist = (state) => {
    return state.users.totalUsers
}

export const getUsersOnOnePage = (state) => {
    return state.users.onOnePage
}

export const getCurrentPageNumber = (state) => {
    return state.users.currentPage
}

export const getIsLoading = (state) => {
    return state.users.isLoading
}

export const getPaginatorLength = (state) => {
    return state.users.paginatorLength
}

export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress
}