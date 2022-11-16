import { Container, Row, Col, Button } from 'react-bootstrap';
import v60 from '../app/assets/v60.jpg';
import latte from '../app/assets/latte-pour.jpg';
import { Link } from 'react-router-dom';

const TheCoffeePage = () => {
	return (
		<Container className='pt-5 text-center page-overlay'>
			<Row className='px-4 justify-content-center'>
				<Col lg='10' xl='9'>
					<h2>all about the coffee</h2>
					we're passionate about coffee and we love to share! explore our
					offerings online with our interactive coffee map, or come in for a
					class to bring the good flavors home with you too.
				</Col>
			</Row>
			<Row>
				<Col>
                <Row className='mx-3 my-5'>
			<Col xs='12'>
				<img
					className='ml-3 img-fluid class-info-img'
					alt='barista'
					src={latte}
				/>
			</Col>
			<Col className='align-self-center mt-3'>
				<h1>classes</h1>
				<p className='info-text'>
					join us for cupping sessions, home brewing and espresso classes{' '}
					<div>
						<Link to='/coffee-classes'>
						<Button className='btn-dark'>
							book now
							</Button>
						</Link>
					</div>
				</p>
			</Col>
		</Row>
				</Col>
				<Col>
					<Row className='mx-3 my-5'>
						<Col xs='12'>
							<img
								className='ml-3 img-fluid coffee-info-img'
								src={v60}
								alt='some coffee'
							/>
						</Col>
						<Col className='align-self-center mt-3'>
							<h1>our coffee</h1>
							<p className='info-text'>
								we work with roasters from around the US to bring you the very
								best we can find! learn more about the roasters and beans
								currently available{' '}
							</p>
									<Link to='/coffee-map'>
										<Button className='btn-dark'>here</Button>
									</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default TheCoffeePage;
