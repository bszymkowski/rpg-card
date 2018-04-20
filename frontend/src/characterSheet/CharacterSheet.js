import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import {actions} from './reducer'
import {store} from '../config/redux'

export default class CharacterSheet extends Component {

    constructor() {
        super();
        store.subscribe( () => {
            this.setState(store.getState().characterSheet);
        })
    }



    state = {
        header: {}
    };

    onChange = (change) => {
        store.dispatch({type: actions.VALUE_CHANGE, change})
    };


    componentDidMount() {


        fetch('api/character')
            .then(
                (ok) => {
                    return ok.json()
                }
            )
            .then(data => {
                store.dispatch({type: actions.VALUE_CHANGE, change: data});
            });
    }

    render() {
        return (
            <Container>
                <Header header={this.state.header} onChangeValues={this.onChange}/>
            </Container>
        );
    }
}

