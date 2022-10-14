const CoffeeMenuItem = ({ item }) => {
	const { name, country, description } = item;
	return (
		<>
			<h5>{name.toLowerCase()}</h5>
			<p>
				{country.toLowerCase()}
				<br />
				<small>{description.toLowerCase()}</small>
			</p>
		</>
	);
};

export default CoffeeMenuItem;
