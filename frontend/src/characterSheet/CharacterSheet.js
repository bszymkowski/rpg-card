import {Container} from 'reactstrap';
import {React} from 'react';
import Header from "./Header";
import {actions} from './reducer'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';

const CharacterSheet = ({characterSheet, onChangeValue}) => {

    return (
        <Container>
            <Header header={characterSheet.header} onChangeValues={onChangeValue}/>
        </Container>
    );

};

CharacterSheet.propTypes = {
    characterSheet: PropTypes.object,
    onChangeValue: PropTypes.func
};

const mapStateToProps = (state) => {
    const {characterSheet} = state;
    return {characterSheet};
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeValue: val => {
            dispatch(actions.changeValue(val))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);