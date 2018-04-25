import {createStore, combineReducers, applyMiddleware} from 'redux'
import {characterSheet} from '../characterSheet/reducer'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const rtMiddleware = routerMiddleware(history);

export const store = createStore(combineReducers({
    characterSheet,
    router: routerReducer
}), applyMiddleware(thunkMiddleware, rtMiddleware));
