const CoffeeMenuItem = ({ coffee }) => {
	const { coffeeName, country, description } = coffee
	return (
		<>
			<h5>{coffeeName.toLowerCase()}</h5>
			<p>
				{country.toLowerCase()}
				<br />
				<small>{description.toLowerCase()}</small>
			</p>
		</>
	)
}

export default CoffeeMenuItem
