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
import UserBadge from "./UserBadge";


function NavBar({user, logout}) {
    return !!user ? (
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
        )
        : (<div/>);

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