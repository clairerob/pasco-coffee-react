import CoffeeMenuItem from './CoffeeMenuItem';
import { getCurrentCoffees } from '../../app/shared/COFFEES';
import { Col } from 'react-bootstrap';

const CoffeeMenuList = () => {
	const items = getCurrentCoffees();

	return (
		<>
			{items.map((item) => {
				return (
					<Col sm='6' key={item.id} className='text-center' >
						<CoffeeMenuItem item={item}/>
					</Col>
				);
			})}
		</>
	);
};

export default CoffeeMenuList;