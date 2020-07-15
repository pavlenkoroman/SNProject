import * as axios from 'axios';
import { makeAuth, setAuthData } from '../redux/auth-reducer';

let instance = axios.create({
    withCredentials: true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "c2ec56da-8cc1-4d93-8145-67bc7c8642d9"
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

    loginRequest(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logoutRequest() {
        return instance.delete('auth/login')
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