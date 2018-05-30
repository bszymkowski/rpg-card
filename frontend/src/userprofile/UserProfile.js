import React from 'react'
import {connect} from "react-redux";

const UserProfile = ({user}) => {
    return (
        <div>
            User Profiel of {user.name}
        </div>
    )
};


const mapStateToProps = state => {
    const user = state.auth.user;
    return {user};
};

export default connect(mapStateToProps)(UserProfile);