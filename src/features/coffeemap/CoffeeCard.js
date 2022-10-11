import v60 from '../../app/assets/v60.jpg';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CoffeeCard = () => {
	return (
		<Row className='align-items-space-between row-content mx-3 my-5'>
			<Col>
				<img className='ml-3 img-fluid' src={v60} />
			</Col>
			<Col sm='6' lg='4' className='align-self-center'>
				<h1>our coffee</h1>
				<p>
					we work with roasters from around the US to bring you the very best we
					can find! learn more about the roasters and beans currently available{' '}
					<Link to='/coffee-map' class='btn btn-dark'>
						here.
					</Link>
				</p>
			</Col>
		</Row>
	);
};

export default CoffeeCard;