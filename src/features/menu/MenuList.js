import MenuItem from './MenuItem';
import { getCurrentMenuItems } from '../../app/shared/MENU_ITEMS';
import { Col } from 'reactstrap';

const MenuList = () => {
	const items = getCurrentMenuItems();

	return (
		<>
            {items.map((item) => {
				return (
					<Col sm='6' key={item.id} className='text-center' >
						<MenuItem item={item}/>
					</Col>
				);
			})}
		</>
	);
};

export default MenuList;
