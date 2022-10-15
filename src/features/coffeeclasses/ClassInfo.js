import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import latte from '../../app/assets/latte-pour.jpg';


const ClassInfo = () => {
	return (
			<Row className='align-items-space-between row-content mx-3 my-5'>
				<Col>
					<img className='ml-3 img-fluid class-info-img' alt='barista' src={latte} />
				</Col>
				<Col sm='6' lg='4' className='align-self-center order-sm-first'>
					<h1>classes</h1>
					<p className='info-text'>
						join us for cupping sessions, home brewing and espresso classes{' '}
						<Link to='/coffee-classes' class='btn btn-dark'>
							book now
						</Link>
					</p>
				</Col>
			</Row>
	);
};

export default ClassInfo;
