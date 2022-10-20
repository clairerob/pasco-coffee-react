// import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	// const [menuOpen, setMenuOpen] = useState(false);
	// const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className='header'>
			<div className='order-banner'>
				<a
					className='order-banner'
					href='https://pasco-farms.square.site/pasco-coffee-bar'
				>
					ORDER ONLINE
				</a>
			</div>
			<Navbar
				sticky='top'
				expand='sm'
				light='true'
				className='mx-auto px-sm-3 px-lg-5'
				collapseOnSelect={true}
			>
				<Navbar.Brand href='/'>
					{/* <img
						src={logo}
						alt='pasco coffee logo'
						width='100px'
						height='100px'
					/> */}
					<h1 className='brand-name p-3'>Pasco Coffee</h1>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					// onClick={() => setMenuOpen(!menuOpen)}
				/>
				<Navbar.Collapse
					id='basic-navbar-nav'
					// isOpen={menuOpen}
					className='justify-content-end'
				>
					<Nav
						// onClick={() => setMenuOpen(false)}
						className='navlinks'
					>
						<Nav.Link eventKey='1'>
							<NavLink className='nav-link' to='/'>
								home
							</NavLink>
						</Nav.Link>
						<Nav.Link eventKey='2'>
							<NavLink className='nav-link' to='/menu'>
								menu
							</NavLink>
						</Nav.Link>
						<Nav.Link eventKey='3'>
							<NavLink className='nav-link' to='/about'>
								about
							</NavLink>
						</Nav.Link>
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

						<Nav.Link eventKey='4'>
							<NavLink className='nav-link' to='/coffee'>
								the coffee
							</NavLink>
						</Nav.Link>
						<Nav.Link eventKey='5'>
							<NavLink className='nav-link' to='/contact'>
								contact
							</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
