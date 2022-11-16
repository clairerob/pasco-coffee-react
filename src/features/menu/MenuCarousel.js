import { Row, Col } from 'react-bootstrap';
import { getFeaturedMenuItems } from './menuItemsSlice';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const items = useSelector(getFeaturedMenuItems);

	return (
		<Row className='row-content justify-content-center'>
			<Col md='9'>
				<Carousel className='menu-carousel' activeIndex={index} onSelect={handleSelect}>
					{items.map((item) => {
						return (
							<Carousel.Item key={item.id}>
								<img
									className='d-block w-100'
									src={item.image}
									alt={item.drink}
								/>
								<Carousel.Caption className='menu-carousel-captions'>
									<Link to='/menu' className='carousel-links'>
										<h3>{item.drink}</h3>
										<p className='d-none d-sm-block'>{item.description}</p>
									</Link>
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
