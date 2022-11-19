import { getAllRoasteries } from './roasteriesSlice';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const RoastersList = () => {
	const roasteries = useSelector(getAllRoasteries);
	return (
		<Row className='align-items-center my-5'>
			{roasteries.map((roastery) => {
				return (
					<Col key={roastery.id} xs='6' sm='3' lg='2'>
						<a href={roastery.link}>
							<img
								src={roastery.image}
								alt={roastery.name}
								width='100%'
								height='100%'
							/>
						</a>
					</Col>
				);
			})}
		</Row>
	);
};

export default RoastersList;
