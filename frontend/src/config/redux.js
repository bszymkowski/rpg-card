import {createStore, combineReducers, applyMiddleware} from 'redux'
import {characterSheet} from '../characterSheet/reducer'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(combineReducers({characterSheet}), applyMiddleware(thunkMiddleware));
