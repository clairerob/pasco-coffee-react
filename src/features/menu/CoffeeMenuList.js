import CoffeeMenuItem from './CoffeeMenuItem'
import { getCurrentCoffees } from '../coffeemap/coffeesSlice'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const CoffeeMenuList = () => {
	const coffees = useSelector(getCurrentCoffees)
	const isLoading = useSelector((state) => state.coffees.isLoading)
	const errMsg = useSelector((state) => state.coffees.errMsg)

	if (isLoading) {
		return <Loading />
	}

	if (errMsg) {
		return <Error errMsg={errMsg} />
	}

	return (
		<>
			{coffees.currentCoffees.map((coffee) => {
				return (
					<Col sm='6' key={coffee._id} className='text-center'>
						<CoffeeMenuItem coffee={coffee} />
					</Col>
				)
			})}
		</>
	)
}

export default CoffeeMenuList
