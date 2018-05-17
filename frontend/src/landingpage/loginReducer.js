import {LOGGED_IN_REQUEST, LOGIN_INFO_RECEIVED} from "./loginActions";


export function auth(state = {
    isFetching: false,
    isAuthenticated: false
}, action) {
    switch (action.type) {
        case LOGGED_IN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_INFO_RECEIVED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: action.isAuthenticated,
                user: action.user
            });
        default:
            return state
    }
}