import MenuItem from './MenuItem';
import { getCurrentMenuItems } from './menuItemsSlice';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MenuList = () => {
	const items = useSelector(getCurrentMenuItems);

	return (
		<>
			{items.map((item) => {
				return (
					<Col sm='6' key={item.id} className='text-center'>
						<MenuItem item={item} />
					</Col>
				);
			})}
		</>
	);
};

export default MenuList;
