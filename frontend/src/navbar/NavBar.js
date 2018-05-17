import React from 'react';
import {connect} from "react-redux";


function NavBar({user}) {
    return(
        <div>
            {user ? "Witaj, " + user.name : ""}
        </div>
    )
}

const mapStateToProps = state => {
  const user = state.auth.user;
  return {user};
};

const mapDispatchToprops = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToprops)(NavBar)