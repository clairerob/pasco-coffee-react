import { Row, Col } from 'reactstrap';
import { getFeaturedMenuItems } from '../../app/shared/MENU_ITEMS';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MenuCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const items = getFeaturedMenuItems();

	return (
		<Row className='row-content justify-content-center'>
			<Col md='9'>
				<Carousel activeIndex={index} onSelect={handleSelect}>
				{items.map((item) => { 
				 	return (
					<Carousel.Item>
						<img className='d-block w-100' src={item.image} alt={item.drink} />
						<Carousel.Caption>
							<h3>{item.drink}</h3>
							<p className='d-none d-lg-block'>{item.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
				})}
				</Carousel>
			</Col>
		</Row>
	);
};

export default MenuCarousel;
