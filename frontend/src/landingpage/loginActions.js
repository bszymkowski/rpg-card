import axios from 'axios';
import {api} from './../config/api'
import {REQUEST_COMPLETED, REQUEST_SENT} from "../request/request";
import {push} from "react-router-redux";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const logout = () => dispatch => {
    dispatch({type: REQUEST_SENT});
    dispatch(push("/"));
    axios.post(api.logout)
        .then(() => dispatch(getLoggedInState())
        ).catch(() => dispatch(getLoggedInState()))
};


export const getLoggedInState = () => dispatch => {

    dispatch({type: REQUEST_SENT});
    axios.get(api.user).then(response => response.data)
        .then(userInfomationReceived)
        .catch(notLoggedIn);

    function notLoggedIn() {
        dispatch({type: REQUEST_COMPLETED});
        dispatch({type: LOGIN_FAIL});
        dispatch(push("/"));
    }

    function userInfomationReceived(user) {
        dispatch({type: REQUEST_COMPLETED});
        dispatch(
            {
                type: LOGIN_SUCCESS,
                user
            }
        );
    }
};