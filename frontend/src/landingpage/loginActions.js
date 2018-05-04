import axios from 'axios';
import {push} from 'react-router-redux';
import {socialLogin} from "../config/socialLogin";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}


export function loginUser(creds) {

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds));

        return socialLogin('google').login()
            .then(({authResponse}) => {
                return authResponse.access_token;
            }).then(
                (access_token) =>
                    axios.post('/api/login', {network: 'google', token: access_token})
            )
            .then(({status, headers}) => {
                let user = {};
                const {authorization} = headers;
                user.id_token = authorization;
                if (status !== 200) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginError(user));
                    return Promise.reject(user);
                } else {
                    // If login was successful, set the token in local storage
                    axios.defaults.headers.common['Authorization'] = authorization;
                    localStorage.setItem('id_token', authorization);
                    // Dispatch the success action
                    dispatch(receiveLogin(user));
                    dispatch(push("/sheet/12"));
                }
            }).catch(err => dispatch(loginError(err)))
    }
}