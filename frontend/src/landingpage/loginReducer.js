import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./loginActions";


export function auth(state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token')
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        // case LOGOUT_SUCCESS:
        //     return Object.assign({}, state, {
        //         isFetching: true,
        //         isAuthenticated: false
        //     });
        default:
            return state
    }
}