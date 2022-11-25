import MenuItem from './MenuItem'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getCurrentDrinks } from './drinksSlice'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const MenuList = () => {
	const drinks = useSelector(getCurrentDrinks)
	const isLoading = useSelector((state) => state.drinks.isLoading)
	const errMsg = useSelector((state) => state.drinks.errMsg)

	if (isLoading) {
		return <Loading />
	}

	if (errMsg) {
		return <Error errMsg={errMsg} />
	}

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
