import React from 'react';

import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'

import './App.css';
import CharacterSheet from "./characterSheet/CharacterSheet";
import LandingPage from "./landingpage/LandingPage"
import {store, history} from "./config/redux";
import {Provider} from 'react-redux';
import NavBar from "./navbar/NavBar";

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/sheet/:characterId" component={CharacterSheet}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
