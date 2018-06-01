import {PROFILE_CHANGE} from "./userProfileActions";
import {LOGIN_SUCCESS} from "../landingpage/loginActions";

export const profile = (state = {}, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.user);
        case PROFILE_CHANGE:
            return Object.assign({}, state, action.payload, {dirty: true});
        default:
            return state;
    }
};