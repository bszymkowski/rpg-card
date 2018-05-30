import React from 'react';

import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'

import './App.css';
import CharacterSheet from "./characterSheet/CharacterSheet";
import LandingPage from "./landingpage/LandingPage"
import {store, history, persistor} from "./config/redux";
import {Provider} from 'react-redux';
import UserProfile from './userprofile/UserProfile'
import NavBar from "./navbar/NavBar";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <div>
                        <NavBar/>
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/user" component={UserProfile}/>
                            <Route exact path="/sheet/:characterId" component={CharacterSheet}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
