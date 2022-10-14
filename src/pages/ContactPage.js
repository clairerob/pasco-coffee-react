import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
	return (
		<Container className='mt-5'>
			<h1 className='text-center'>get in touch!</h1>
			<Row className='justify-content-around'>
				<Col xs='12' md='6' className='mt-2'>
					<ContactForm />
				</Col>
				<Col className='mt-5'>
						<Row>
							<h3>find us at:</h3>
							<Col className='mt-3'>
								<h5>location</h5>
								<p>
									<a
										href='https://goo.gl/maps/BXTJCXGxS4BWQzn58'
										className='contact-page-location-link'
									>
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
							</Col>
							<Col className='mt-3'>
								<h5>hours</h5>
								<p>
									tues-fri : 7:30am - 3pm
									<br />
									sat : 9am - 5pm
								</p>
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
						</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactPage;
