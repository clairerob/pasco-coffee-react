import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import sanityClient from '../../client'
import ImageUrlBuilder from '@sanity/image-url'
import { getFeaturedDrinks } from './drinksSlice'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const MenuCarousel = () => {
	const builder = ImageUrlBuilder(sanityClient)
	function urlFor(source) {
		return builder.image(source)
	}

	const drinks = useSelector(getFeaturedDrinks)
	const isLoading = useSelector((state) => state.drinks.isLoading)
	const errMsg = useSelector((state) => state.drinks.errMsg)

	const [index, setIndex] = useState(0)
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	if (isLoading || drinks.length > 1) {
		return (
			<Row>
				<Loading />
			</Row>
		)
	}

	if (errMsg) {
		return (
			<Row>
				<Error errMsg={errMsg} />
			</Row>
		)
	}

	return (
		<Row className='row-content justify-content-center'>
			<Col md='9'>
				<Carousel
					className='menu-carousel'
					activeIndex={index}
					onSelect={handleSelect}
				>
					{drinks.featuredDrinks.map((drink) => {
						return (
							<Carousel.Item key={drink._id}>
								<img
									className='d-block w-100'
									src={urlFor(drink.drinkImage).url()}
									alt={drink.drinkName}
								/>
								<Carousel.Caption className='menu-carousel-captions'>
									<Link to='/menu' className='carousel-links'>
										<h3>{drink.drinkName}</h3>
										<p className='d-none d-md-block'>
											{drink.drinkDescription}
										</p>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>
						)
					})}
				</Carousel>
			</Col>
		</Row>
	)
}

export default MenuCarousel
