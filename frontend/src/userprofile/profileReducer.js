import {PROFILE_CHANGE} from "./userProfileActions";
import {LOGIN_SUCCESS} from "../landingpage/loginActions";


export const profile = (state = {}, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {current: action.user}, {base: action.user});
        case PROFILE_CHANGE:
            return Object.assign({}, state, {current: Object.assign({}, state.current, action.payload)});
        default:
            return state;
    }
};