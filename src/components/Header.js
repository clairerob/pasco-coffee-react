import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	// const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className='header'>
			<div className='order-banner'>
				<a className='order-banner' href='https://pasco-farms.square.site/pasco-coffee-bar'>
					ORDER ONLINE
				</a>
			</div>
			<Navbar sticky='top' expand='sm' light className='mx-auto px-sm-3 px-lg-5'>
				<NavbarBrand href='/'>
					{/* <img
						src={logo}
						alt='pasco coffee logo'
						width='100px'
						height='100px'
					/> */}
					<h1 className='brand-name p-3'>Pasco Coffee</h1>
				</NavbarBrand>

				<NavbarToggler
					className='navbar-toggler-icon'
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				<Collapse isOpen={menuOpen} navbar className='justify-content-end'>
					<Nav navbar onClick={() => setMenuOpen(!menuOpen)} className='navlinks'>
						<NavItem>
							<NavLink className='nav-link hi' to='/'>
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
						{/* <NavItem>
							<Dropdown onClick={() => setDropdownOpen(!dropdownOpen)}>
								<DropdownToggle>the coffee</DropdownToggle>
								<DropdownMenu>
									<NavLink to='/coffee-classes'>
										<DropdownItem>Link</DropdownItem>
									</NavLink>
									<NavLink to='/coffee-map'>
										<DropdownItem>coffee</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</Dropdown>
						</NavItem> */}
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
