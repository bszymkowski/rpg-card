import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CardHeader from "./CardHeader";

import {createStore, combineReducers} from 'redux'
import {characterSheet, actions} from './reducer'

export default class CharacterSheet extends Component {

    constructor() {
        super();
        this.store = createStore(combineReducers({characterSheet}));
        this.store.subscribe( () => {
            this.setState(this.store.getState().characterSheet);
        })
    }



    state = {
        header: {}
    };

    onChange = (change) => {
        this.store.dispatch({type: actions.VALUE_CHANGE, change})
    };


    componentDidMount() {


        fetch('api/character')
            .then(
                (ok) => {
                    return ok.json()
                }
            )
            .then(data => {
                this.store.dispatch({type: actions.VALUE_CHANGE, change: data});
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <header className="text-center">
                            {/*<h1>Wampir: Maskarada</h1>*/}
                        </header>
                    </Col>
                </Row>
                <CardHeader header={this.state.header} onChangeValues={this.onChange}/>
            </Container>
        );
    }
}

