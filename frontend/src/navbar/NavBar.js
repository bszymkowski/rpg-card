import React from 'react';
import {connect} from "react-redux";
import {getLoggedInState, logout} from "../landingpage/loginActions";


function NavBar({user, logout}) {
    return !! user ?(
        <div>
            <span>{user ? "Witaj, " + user.name : ""}</span>
            <span>
                <button onClick={logout}>Logout</button>
            </span>
        </div>
    ) : (<div/>);
}

const mapStateToProps = state => {
  const user = state.auth.user;
  return {user};
};

const mapDispatchToprops = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToprops)(NavBar)