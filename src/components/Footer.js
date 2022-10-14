import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
	return (
		<footer className='site-footer'>
			<Container>
				<Row className='pb-3'>
					<Col className=' d-none d-md-block'>
						<ul className='list-unstyled'>
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
						</ul>

						<div>
							<a
								class='btn btn-social-icon btn-instagram'
								href='http://instagram.com/'
							>
								<i class='fa fa-instagram'></i>
							</a>
							<a
								class='btn btn-social-icon btn-facebook'
								href='http://facebook.com/'
							>
								<i class='fa fa-facebook'></i>
							</a>
						</div>
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
								class='btn btn-social-icon btn-instagram'
								href='http://instagram.com/'
							>
								<i class='fa fa-instagram'></i>
							</a>
							<a
								class='btn btn-social-icon btn-facebook'
								href='http://facebook.com/'
							>
								<i class='fa fa-facebook'></i>
							</a>
						</div>
					</Col>
					<Col>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
