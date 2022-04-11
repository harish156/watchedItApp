import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import "./SideBar.css";

class SideBar extends React.Component {
    render() {
        return (
            <Navbar expand="md">
            <Nav vertical className="list-unstyled" color="light">
                <NavItem>
                    <NavLink class="side-item" to={"/about"}>
                       Followers
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={"/pages"}>
                       Following
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  to={"/faq"}>
                        Favorites
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={"/contact"}>
                        Popular Reviews
                    </NavLink>
                </NavItem>
            </Nav>
            </Navbar>
        );
    }
}

export default SideBar;