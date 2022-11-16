const MenuItem = ({ item }) => {
	const { drink, description, price } = item;
	return (
		<>
			<h4>{drink.toLowerCase()}</h4>
			<p>
				<small>{description.toLowerCase()}</small>
				<br />
				<strong>${price.toPrecision(3)}</strong>
			</p>
		</>
	);
};

export default MenuItem;
