import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';


function LandingPage({login}) {

    return (
        <div>
            <button onClick={login}>Batą</button>
        </div>)
}

LandingPage.propTypes ={
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(push("/sheet/12"))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)