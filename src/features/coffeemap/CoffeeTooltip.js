const CoffeeTooltip = ({ coffeeFromHere }) => {

	return (
		<>
			{coffeeFromHere.map((coffee) => (
				<>
					<h3>{coffee.country}</h3>
					<h4>{coffee.name}</h4>
					<p>{coffee.description}</p>
				</>
			))}
		</>
	);
};

export default CoffeeTooltip;
