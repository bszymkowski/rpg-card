import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';
import {loginUser} from "./loginActions";


function LandingPage({login}) {

    return (
        <div>
            <a href="http://localhost:8080/api/oauth2/authorization/google">
                <button>Batą</button>
            </a>
        </div>)
}

LandingPage.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(loginUser({username: "admin", password: "password"}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)