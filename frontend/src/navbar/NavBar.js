import React from 'react';
import {connect} from "react-redux";
import strings from "./strings"
import './nav.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {logout} from "../landingpage/loginActions";
import {push} from "react-router-redux"
import UserBadge from "./UserBadge";


function NavBar({user, logout, userProfile}) {
    return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <span>
                        {user.name}
                    </span>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <UserBadge user={user}/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={userProfile}>
                                <div>
                                    {strings.userProfile}
                                </div>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem onClick={logout}>
                                <div>
                                    {strings.logout}
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        );
}

const mapStateToProps = state => {
    const user = state.auth.user;
    return {user};
};

const mapDispatchToprops = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        },
        userProfile: () => {
            dispatch(push("/profile"));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToprops)(NavBar)