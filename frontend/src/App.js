import React from 'react';
import './App.css';
import {store} from "./config/redux";
import {Provider} from 'react-redux';
import MasterPage from "./MasterPage";

function App() {
    return (
        <Provider store={store}>
                <MasterPage/>
        </Provider>
    );
}

export default App;
