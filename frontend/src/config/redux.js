import {createStore, combineReducers, applyMiddleware} from 'redux'
import {characterSheet} from '../characterSheet/characterReducer'
import thunkMiddleware from 'redux-thunk'
import {routerReducer, routerMiddleware } from 'react-router-redux'
import {auth} from "../landingpage/loginReducer";
import createHistory from "history/createBrowserHistory";
import {request} from "../request/request";
import {profile} from "../userprofile/profileReducer";

export const history = createHistory();

const rtMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
    characterSheet,
    auth,
    profile,
    request,
    router: routerReducer
});


export const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
        rtMiddleware
    ));

