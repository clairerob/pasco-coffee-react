// import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav className='navlinks'>
						<Nav.Link eventKey='1' as={NavLink} to='/'>
							home
						</Nav.Link>
						<Nav.Link eventKey='2' as={NavLink} to='/menu'>
							menu
						</Nav.Link>
						<Nav.Link eventKey='3' as={NavLink} to='/about'>
							about
						</Nav.Link>
						{/* <NavItem>
							<Dropdown onClick={() => setDropdownOpen(!dropdownOpen)}>
								<DropdownToggle>the coffee</DropdownToggle>
								<DropdownMenu>
									<Nav.Link as={NavLink} to='/coffee-classes'>
										<DropdownItem>Link</DropdownItem>
									</Nav.Link>
									<Nav.Link as={NavLink} to='/coffee-map'>
										<DropdownItem>coffee</DropdownItem>
									</Nav.Link>
								</DropdownMenu>
							</Dropdown>
						</NavItem> */}

						<Nav.Link eventKey='4' as={NavLink} to='/coffee'>
							the coffee
						</Nav.Link>
						<Nav.Link eventKey='5' as={NavLink} to='/contact'>
							contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Header
