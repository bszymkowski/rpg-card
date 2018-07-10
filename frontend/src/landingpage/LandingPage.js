import React from 'react';
import {connect} from 'react-redux'

function LandingPage() {
    return (
        <div>
             "OHAI"
        </div>
    )
}


const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)