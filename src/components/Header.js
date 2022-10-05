import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../app/assets/pasco-logo.png';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <div>
            <Link className='order-banner' to='/order'>ORDER ONLINE</Link>
            <Navbar sticky='top' expand='md'>
                <NavbarBrand href='/'>
                    <img src={logo} alt='pasco coffee logo' width='80px'/>
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
        </div>
    )
};

export default Header;