import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../app/assets/pasco-logo.png';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<div className='order-banner'>
				<Link className='order-banner' to='/order'>
					ORDER ONLINE
				</Link>
			</div>
			<Navbar sticky='top' expand='sm' light className='mx-md-3 mx-lg-5'>
				<NavbarBrand href='/'>
					<img
						src={logo}
						alt='pasco coffee logo'
						width='100px'
						height='100px'
					/>
					<h1>Pasco Coffee</h1>
				</NavbarBrand>

				<NavbarToggler
					className='navbar-toggler-icon'
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				<Collapse isOpen={menuOpen} navbar className='justify-content-end'>
					<Nav navbar onClick={() => setMenuOpen(!menuOpen)}>
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
	);
};

export default Header;
