import { formatCurrency } from '../../utils/formatCurrency';

const MenuItem = ({ item }) => {
	const { drink, description, price } = item;
	return (
		<>
			<h4>{drink.toLowerCase()}</h4>
			<p>
				<small>{description.toLowerCase()}</small>
				<br />
				<strong>{formatCurrency(price)}</strong>
			</p>
		</>
	);
};

export default MenuItem;
