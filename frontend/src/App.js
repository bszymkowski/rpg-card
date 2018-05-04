import React, {Component} from 'react';

import {Route} from 'react-router'

import {ConnectedRouter} from 'react-router-redux'

import './App.css';
import CharacterSheet from "./characterSheet/CharacterSheet";
import LandingPage from "./landingpage/LandingPage"
import {store, history} from "./config/redux";
import {Provider} from 'react-redux';

function App() {

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/sheet/:characterId" component={CharacterSheet}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );

}

export default App;
