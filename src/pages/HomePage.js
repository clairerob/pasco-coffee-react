import shopview from '../app/assets/shopview.jpg';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CoffeeInfo from '../features/coffeemap/CoffeeInfo';
import MenuCarousel from '../features/menu/MenuCarousel';
import ClassInfo from '../features/coffeeclasses/ClassInfo';

const HomePage = () => {
	
	return (
		<div>
			<img
				src={shopview}
				alt='shopview'
				width='100%'
				id='shop-img'
				className='img-fluid'
			/>
			<Container className='text-center' id='overlay'>
				<Row className='justify-content-center'>
					<Col className='col-9 col-md-6'>
						<h2 className='p-5'>specialty coffee in downtown thomasville</h2>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Link to='/menu' class='btn col-6 col-md-4'>
						our menu
					</Link>
				</Row>
				<Row className='justify-content-center'>
					{/* change this link  */}
					<a href='/#footer' class='btn col-6 col-md-4'>
						find us
					</a>
				</Row>
			</Container>
			<Container>
				<CoffeeInfo />
				<MenuCarousel />
				<ClassInfo />
				<div id='footer' />
			</Container>
		</div>
	);
};

export default HomePage;
