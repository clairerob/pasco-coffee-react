import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutContent from '../features/AboutContent';
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<div>
			<Container className='pt-5 aboutpage-container'>
			<Row>
				<Col className='text-center'>
					<h1>about us</h1>
				</Col>
			</Row>
				<AboutContent />
				<Row className='justify-content-center'>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/coffee'>
							<Button className='aboutpage-btn btn-warning'>learn more about coffee</Button>
						</Link>
					</Col>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/menu'>
							<Button className='aboutpage-btn btn-warning'>see the menu</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutPage;
