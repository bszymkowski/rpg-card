import { Container } from 'reactstrap';
import React, {Component} from 'react';
import Header from "./Header";
import {actions} from './reducer'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';

class CharacterSheet extends Component {

    constructor({characterSheet, onChangeValue, loadCharacterSheet}) {
        super();
        this.characterSheet = characterSheet;
        this.onChangeValue = onChangeValue;
        this.loadCharacterSheet = loadCharacterSheet;

    }
    componentWillMount() {
        this.props.loadCharacterSheet();
    }
// const CharacterSheet = ({characterSheet, onChangeValue}) => {

    render () {

        return (
            <Container>
                <Header header={this.props.characterSheet.header} onChangeValues={this.props.onChangeValue}/>
            </Container>
        );
    }


};

CharacterSheet.propTypes = {
    characterSheet: PropTypes.object,
    onChangeValue: PropTypes.func.isRequired,
    loadCharacterSheet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const {characterSheet} = state;
    return {characterSheet};
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeValue: val => {
            dispatch(actions.changeValue(val))
        },
        loadCharacterSheet: () => {
            dispatch(actions.loadCharacterSheet());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);