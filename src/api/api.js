import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "03851283-f89c-4ad8-9452-73b1bf363566"
    }
});

export const usersAPI = {
    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`) 
    },

    followRequest(userId) {
        return instance.post(`follow/${userId}`, {})
     },

     getUsers (count = 18, currentPage = 1) {
        return instance.get(`users?count=${count}&page=${currentPage}`)
        .then((response) => {
            return response.data;
        })},

    getProfileRequest(userID) {
        return instance.get('profile/' + userID)
    }
}

export const authAPI = {
    authRequest() {
        return instance.get(`auth/me`)
        .then((response) => {
            return response.data
        })
    },

    extraAuthDataRequest (authUserID) {
        return instance.get(`profile/` + authUserID)
        .then((response) => {
            return response.data
        })
}
}

export const profileAPI = {
    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
        .then((response) => {
            return response
        })
    },

    sendStatus(statusText) {
        return instance.put(`profile/status`, { status: statusText })
    }
}