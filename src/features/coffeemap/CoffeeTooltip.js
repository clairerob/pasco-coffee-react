const CoffeeTooltip = ({ coffeeFromHere }) => {
	return (
		<>
			{coffeeFromHere.map((coffee) => (
				<div key={coffee._id}>
					<h3>{coffee.country}</h3>
					<h5>{coffee.coffeeName}</h5>
					<p>{coffee.description}</p>
				</div>
			))}
		</>
	)
}

export default CoffeeTooltip
