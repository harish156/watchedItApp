import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar expand="md">

                <Nav className="navbar-inverse" navbar>

                    <NavItem className="d-flex align-items-center">
                        <NavLink className="font-weight-bold" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem className="d-flex align-items-center">
                        <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                            Movies
                        </NavLink>
                    </NavItem>
                    <NavItem className="d-flex align-items-center">
                        <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                            TV Shows
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;