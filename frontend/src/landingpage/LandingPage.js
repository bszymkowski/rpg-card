import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';
import {getLoggedInState} from "./loginActions";
import LoginView from "./LoginView";

class LandingPage extends React.Component {

    componentWillMount() {
        const {checkLogin} = this.props;
        checkLogin();
    }

    render() {
        const {isAuthenticated} = this.props;
        return (
            <div>
                {!isAuthenticated ?
                    <LoginView/> :
                    "OHAI"}
            </div>)
    }
}

LandingPage.propTypes = {
    checkLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const isAuthenticated = !!state.auth.user;
    return {isAuthenticated};
};

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: () => {
            dispatch(getLoggedInState())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)