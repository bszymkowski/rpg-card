import React from 'react';
import {history} from "./config/redux";
import {connect} from "react-redux";
import {getLoggedInState} from "./landingpage/loginActions";
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import CharacterSheet from "./characterSheet/CharacterSheet";
import LandingPage from "./landingpage/LandingPage"
import UserProfile from './userprofile/UserProfile'
import NavBar from "./navbar/NavBar";
import {PropTypes} from 'prop-types';
import LoginView from "./landingpage/LoginView";

class MasterPage extends React.Component {

    componentWillMount() {
        const {checkLogin, isAuthenticated} = this.props;
        if (!isAuthenticated) {
            checkLogin();
        }
    }

    render() {
        const {isAuthenticated} = this.props;
        return (
            <ConnectedRouter history={history}>
                <div>
                    {isAuthenticated ?
                        <span>
                        <NavBar/>
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/profile" component={UserProfile}/>
                            <Route exact path="/sheet/:characterId" component={CharacterSheet}/>
                        </Switch>
                            </span>
                        :
                        <LoginView/>}
                </div>
            </ConnectedRouter>)
    }
}

MasterPage.propTypes = {
    checkLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(MasterPage)