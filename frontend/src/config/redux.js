import {createStore, combineReducers, applyMiddleware} from 'redux'
import {characterSheet} from '../characterSheet/characterReducer'
import thunkMiddleware from 'redux-thunk'
import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import {auth} from "../landingpage/loginReducer";
import createHistory from "history/createBrowserHistory";
import {request} from "../request/request";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {profile} from "../userprofile/profileReducer"; // defaults to localStorage for web and AsyncStorage for react-native

export const history = createHistory();

const rtMiddleware = routerMiddleware(history);

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    characterSheet,
    auth,
    profile,
    request,
    router: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        rtMiddleware
    ));

export const persistor = persistStore(store);

