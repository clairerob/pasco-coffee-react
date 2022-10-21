import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import latte from '../../app/assets/latte-pour.jpg';

const ClassInfo = () => {
	return (
		<Row className='align-items-space-between row-content mx-3 my-5'>
			<Col>
				<img
					className='ml-3 img-fluid class-info-img'
					alt='barista'
					src={latte}
				/>
			</Col>
			<Col sm='6' lg='4' className='align-self-center order-sm-first mt-3'>
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
	);
};

export default ClassInfo;
