import shopview from '../app/assets/shopview.jpg';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CoffeeCard from '../features/coffeemap/CoffeeCard';
import MenuCarousel from '../features/menu/MenuCarousel';
import ClassCard from '../features/coffeeclasses/ClassCard';

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
					<Link to='/about' class='btn col-6 col-md-4'>
						find us
					</Link>
				</Row>
			</Container>
			<Container>
				<CoffeeCard />
				<MenuCarousel />
				<ClassCard />
			</Container>
		</div>
	);
};

export default HomePage;
