import { formatCurrency } from '../../utils/formatCurrency'

const MenuItem = ({ drink }) => {
	const { drinkName, drinkDescription, drinkPrice } = drink
	return (
		<>
			<h4>{drinkName.toLowerCase()}</h4>
			<p>
				<small>{drinkDescription.toLowerCase()}</small>
				<br />
				<strong>{formatCurrency(drinkPrice)}</strong>
			</p>
		</>
	)
}

export default MenuItem
