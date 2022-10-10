import { Row, Col } from 'reactstrap';
//import { getFeaturedMenuItems } from '../../app/shared/MENU_ITEMS';
import drink from '../../app/assets/drink.jpg';
import latte from '../../app/assets/latte-art.jpg';
import v60 from '../../app/assets/v60.jpg';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// const items = [
// 	{
// 		src: { drink },
// 		altText: 'a',
// 		header: 'ah',
// 		caption: 'ac',
// 	},
// 	{
// 		src: { latte },
// 		altText: 'b',
// 		header: 'bh',
// 		caption: 'bc',
// 	},
// 	{
// 		src: { v60 },
// 		altText: 'c',
// 		header: 'ch',
// 		caption: 'cc',
// 	},
// ];

const MenuCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Row className='row-content justify-content-center'>
			<Col md='9'>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img className='d-block w-100' src={drink} alt='First slide' />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={latte} alt='Second slide' />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={v60} alt='Third slide' />

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Col>
		</Row>
	);
};

export default MenuCarousel;
