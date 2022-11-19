import CoffeeMenuItem from './CoffeeMenuItem';
import { getCurrentCoffees } from '../coffeemap/coffeesSlice';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CoffeeMenuList = () => {
	const items = useSelector(getCurrentCoffees);

	return (
		<>
			{items.map((item) => {
				return (
					<Col sm='6' key={item.id} className='text-center'>
						<CoffeeMenuItem item={item} />
					</Col>
				);
			})}
		</>
	);
};

export default CoffeeMenuList;
