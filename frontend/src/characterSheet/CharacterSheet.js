import { Container } from 'reactstrap';
import React, {Component} from 'react';
import Header from "./Header";
import {actions} from './characterReducer'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';

class CharacterSheet extends Component {

    componentWillMount() {
        const {characterId} = this.props;
        this.props.loadCharacterSheet(characterId);
    }

    render () {
        const {characterSheet, onChangeValue} = this.props;

        return (
            <Container>
                <Header header={characterSheet.header} onChangeValues={onChangeValue}/>
            </Container>
        );
    }
}

CharacterSheet.propTypes = {
    characterSheet: PropTypes.object,
    onChangeValue: PropTypes.func.isRequired,
    loadCharacterSheet: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const {characterId} = ownProps.match.params;
    const {characterSheet} = state;
    return {characterSheet, characterId};
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeValue: val => {
            dispatch(actions.changeValue(val))
        },
        loadCharacterSheet: (id) => {
            dispatch(actions.loadCharacterSheet(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);