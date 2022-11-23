import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import owner from '../app/assets/owner.jpg'

const AboutPage = () => {
	return (
		<div>
			<Container className='pt-5 aboutpage-container'>
				<Row>
					<Col className='text-center'>
						<h1>about us</h1>
					</Col>
				</Row>
				<Row className='mx-5 py-5 gx-5 gy-4 align-items-center'>
			<Col md='6'>
				<img src={owner} className='img-fluid aboutpage-img' alt='owner' />
			</Col>
			<Col className='aboutpage-text'>
				<p>
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum
				</p>
			</Col>
		</Row>
				<Row className='justify-content-center gap-4'>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/coffee'>
							<button className='aboutpage-btn'>learn more about coffee</button>
						</Link>
					</Col>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/menu'>
							<button className='aboutpage-btn'>see the menu</button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutPage
