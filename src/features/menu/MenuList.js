import MenuItem from './MenuItem'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getCurrentDrinks } from './drinksSlice'

const MenuList = () => {
	const drinks = useSelector(getCurrentDrinks)

	return (
		<>
			{drinks.currentDrinks.map((drink) => {
				return (
					<Col sm='6' key={drink._id} className='text-center'>
						<MenuItem drink={drink} />
					</Col>
				)
			})}
		</>
	)
}

export default MenuList
