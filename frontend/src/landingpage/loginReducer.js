import {LOGIN_SUCCESS, LOGIN_FAIL} from "./loginActions";


export function auth(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                user: null
            });
        default:
            return state
    }
}