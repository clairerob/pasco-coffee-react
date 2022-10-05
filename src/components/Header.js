import logo from '../assets/pasco-logo.png';
import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NatItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    return (
        <Navbar sticky='top' expand='md'>
            <Link className='order-banner'>ORDER ONLINE</Link>
            <NavbarBrand href='/'>
                <img src={logo} alt='pasco coffee logo' />
                <h1>Pasco Coffee Bar</h1>
            </NavbarBrand>
            
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'>
                            menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            about
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/coffee'>
                            the coffee
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;