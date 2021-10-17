import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,
        NavbarContainer,
        NavbarSticky,
        NavItem } from 'uikit-react';

const NavBar = () => (
    <NavbarSticky>
        <NavbarContainer dropbar='true'>
            <Navbar left>
                <NavItem><Link to='/'>Home</Link></NavItem>
                <NavItem><Link to='/about'>About</Link></NavItem>
                <NavItem><Link to='/articles-list'>Articles</Link></NavItem>
            </Navbar>
        </NavbarContainer>
    </NavbarSticky>
);

export default NavBar;