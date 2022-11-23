import shopview from '../app/assets/shopview.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CoffeeInfo from '../features/coffeemap/CoffeeInfo'
import MenuCarousel from '../features/menu/MenuCarousel'
import ClassInfo from '../features/coffeeclasses/ClassInfo'
import AboutContent from '../features/AboutContent'

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
						<h3 className='mt-4'>specialty coffee in downtown thomasville</h3>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Link to='/menu' className='btn col-6 col-md-4 mt-3'>
						<h2>our menu</h2>
					</Link>
				</Row>
				<Row className='justify-content-center'>
					{/* change this link  */}
					<Link to='/contact' className='btn col-6 col-md-4 mb-4'>
						<h2>find us</h2>
					</Link>
				</Row>
			</Container>
			<div className='page-main py-5'>
				<Container className='mt-5 pt-5'>
					<CoffeeInfo />
					<MenuCarousel />
					<ClassInfo />
					<AboutContent className='my-lg-5' />
					<Row className='text-center pt-5 px-3 px-md-5'>
						<Col>
							<a href='https://pasco-farms.square.site/pasco-coffee-bar'>
								<button className='order-btn px-5'>
									<h2>order online now</h2>
								</button>
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default HomePage
