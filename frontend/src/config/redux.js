import {createStore, combineReducers, applyMiddleware} from 'redux'
import {characterSheet} from '../characterSheet/characterReducer'
import thunkMiddleware from 'redux-thunk'
import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import {auth} from "../landingpage/loginReducer";
import createHistory from "history/createBrowserHistory";
import {request} from "../request/request";

export const history = createHistory();

const rtMiddleware = routerMiddleware(history);

export const store = createStore(combineReducers({
        characterSheet,
        auth,
        request,
        router: routerReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        rtMiddleware
    ));
