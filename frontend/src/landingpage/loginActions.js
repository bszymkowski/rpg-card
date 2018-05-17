import axios from 'axios';
import {api} from './../config/api'

export const LOGGED_IN_REQUEST = 'LOGGED_IN_REQUEST';
export const LOGIN_INFO_RECEIVED = "LOGIN_INFO_RECEIVED";


export const getLoggedInState = () => dispatch => {

    dispatch({type: LOGGED_IN_REQUEST});

    axios.get(api.user).then(response => response.data)
        .then(user =>
            dispatch({
                type: LOGIN_INFO_RECEIVED,
                isAuthenticated: true,
                user
            })
        ).catch(
        dispatch({
            type: LOGIN_INFO_RECEIVED,
            isAuthenticated: false
        })
    )
};