import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
	return (
		<footer className='site-footer'>
			<Container>
				<Row className='pb-3'>
					<Col className='d-none d-md-block'>
						<div>
							<a
								className='btn btn-social-icon btn-instagram'
								href='https://www.instagram.com/pascocoffeebar'
							>
								<i className='fa fa-instagram'></i>
							</a>
							<a
								className='btn btn-social-icon btn-facebook'
								href='http://facebook.com/'
							>
								<i className='fa fa-facebook'></i>
							</a>
						</div>

						<ul className='list-unstyled mt-4'>
							<li>
								<Link to='/'>home</Link>
							</li>
							<li>
								<Link to='/menu'>menu</Link>
							</li>
							<li>
								<Link to='/about'>about</Link>
							</li>
							<li>
								<Link to='/coffee'>coffee</Link>
							</li>
							<li>
								<Link to='/coffee-map'>the coffee map</Link>
							</li>
							<li>
								<Link to='/coffee-classes'>coffee classes</Link>
							</li>
							<li>
								<Link to='/contact'>contact us</Link>
							</li>
						</ul>

						<a href='https://pasco-farms.square.site/pasco-coffee-bar'>
							<Button className='btn-dark mx-auto my-5 px-5 btn-lg'>
								order online now
							</Button>
						</a>
					</Col>
					<Col>
						<h5>location</h5>

						<p>
							<a href='https://goo.gl/maps/BXTJCXGxS4BWQzn58'>
								107 s broad street unit b
								<br />
								thomasville
								<br />
								ga
								<br />
								31792
								<br />
								(at rear of relish)
							</a>
						</p>
						<h5>hours</h5>
						<p>
							tues-fri : 7:30am - 3pm
							<br />
							sat : 9am - 5pm
						</p>
						<div className='d-md-none'>
							<a
								className='btn btn-social-icon btn-instagram'
								href='https://www.instagram.com/pascocoffeebar'
							>
								<i className='fa fa-instagram'></i>
							</a>
							<a
								className='btn btn-social-icon btn-facebook'
								href='http://facebook.com/'
							>
								<i className='fa fa-facebook'></i>
							</a>
						</div>
					</Col>
					<Col className='d-none d-sm-block'>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
