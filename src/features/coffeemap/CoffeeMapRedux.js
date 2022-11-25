import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import mymap from '../../app/assets/mymap.json'
import { getCurrentCoffeeCountries, getCurrentCoffees } from './coffeesSlice'
import CoffeeTooltip from './CoffeeTooltip'
import { useSelector } from 'react-redux'

const geoUrl = mymap

const worldStyles = {
	default: {
		fill: '#38a',
		stroke: '#38a',
		outline: 'none',
	},
	hover: {
		fill: '#5ac',
		stroke: '#5ac',
		outline: 'none',
	},
	pressed: {
		fill: '#5ac',
		stroke: '#5ac',
		outline: 'none',
	},
}

const coffeeCountryStyles = {
	default: {
		fill: '#d55',
		stroke: '#d55',
		outline: 'none',
	},

	hover: {
		fill: '#b33',
		stroke: '#b33',
		strokeWidth: 3,
		outline: 'none',
	},
	pressed: {
		fill: '#b33',
		stroke: '#b33',
		strokeWidth: 3,
		outline: 'none',
	},
}

const CoffeeMap = ({ setTooltipContent }) => {
	const currentCoffees = useSelector(getCurrentCoffees)
	const currentCoffeeCountries = useSelector(getCurrentCoffeeCountries)

	return (
		<div data-tip=''>
			<ComposableMap projectionConfig={{ scale: 220, center: [23, 0] }}>
				<Geographies geography={geoUrl}>
					{({ geographies, borders, outline }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								style={
									currentCoffeeCountries.currentCoffeeCountries.includes(
										geo.properties.name
									)
										? coffeeCountryStyles
										: worldStyles
								}
								onMouseEnter={() => {
									const coffeeFromHere = currentCoffees.currentCoffees.filter(
										(coffee) =>
											coffee.country.toLowerCase() ===
											geo.properties.name.toLowerCase()
									)
									setTooltipContent(
										coffeeFromHere.length > 0 && (
											<CoffeeTooltip coffeeFromHere={coffeeFromHere} />
										)
									)
								}}
								onMouseLeave={() => {
									setTooltipContent('')
								}}
							/>
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	)
}

export default CoffeeMap
