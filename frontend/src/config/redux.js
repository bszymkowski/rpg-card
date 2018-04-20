import {createStore, combineReducers} from 'redux'
import {characterSheet} from '../characterSheet/reducer'

export const store = createStore(combineReducers({characterSheet}));
