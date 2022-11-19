import shopview from '../app/assets/shopview.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoffeeInfo from '../features/coffeemap/CoffeeInfo';
import MenuCarousel from '../features/menu/MenuCarousel';
import ClassInfo from '../features/coffeeclasses/ClassInfo';
import AboutContent from '../features/AboutContent';
import Categories from '../testing/Categories';

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
			<Container className='text-center mt-5' id='overlay'>
				<Row className='justify-content-center'>
					<Col className='col-9 col-md-6'>
						<h2 className='pt-5'>specialty coffee in downtown thomasville</h2>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Link to='/menu' className='btn col-6 col-md-4 mt-4'>
						our menu
					</Link>
				</Row>
				<Row className='justify-content-center'>
					{/* change this link  */}
					<a href='/#footer' className='btn col-6 col-md-4 mb-4'>
						find us
					</a>
				</Row>
			</Container>
			<Container className='page-overlay'>
				<Categories />
				<CoffeeInfo />
				<MenuCarousel />
				<ClassInfo />
				<AboutContent className='my-lg-5' />
				<Row className='text-center pt-5 px-3 px-md-5'>
					<Col>
						<a href='https://pasco-farms.square.site/pasco-coffee-bar'>
							<Button className='btn-dark btn-lg px-5'>
								<h2>order online now</h2>
							</Button>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HomePage;
