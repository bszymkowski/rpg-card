import axios from 'axios';

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


        return axios.post('/api/login', {
            username: creds.username,
            password: creds.password
        })

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
                    localStorage.setItem('id_token', authorization);
                    // Dispatch the success action
                    dispatch(receiveLogin(user))
                }
            }).catch(err => dispatch(loginError(err)))
    }
}