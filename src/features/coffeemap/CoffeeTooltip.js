const CoffeeTooltip = ({ coffeeFromHere }) => {

	return (
		<>
			{coffeeFromHere.map((coffee) => (
				<>
					<h3>{coffee.country}</h3>
					<h5>{coffee.name}</h5>
					<p>{coffee.description}</p>
				</>
			))}
		</>
	);
};

export default CoffeeTooltip;
