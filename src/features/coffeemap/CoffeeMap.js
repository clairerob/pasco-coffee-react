import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { memo } from 'react';
import mymap from '../../app/assets/mymap.json';
import { getCurrentCoffeesByCountry } from '../../app/shared/COFFEES';
import CoffeeTooltip from './CoffeeTooltip';
import { useNavigate } from 'react-router-dom';

const geoUrl = mymap;

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
};

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
};

const CoffeeMap = ({ setTooltipContent }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		if (e.detail === 2) {
			console.log(e.detail);
			navigate('/menu');
		}
	};

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
									getCurrentCoffeesByCountry(geo.properties.name).length
										? coffeeCountryStyles
										: worldStyles
								}
								onMouseEnter={() => {
									const coffeeFromHere = getCurrentCoffeesByCountry(
										geo.properties.name
									);
									setTooltipContent(
										coffeeFromHere.length > 0 && (
											<CoffeeTooltip coffeeFromHere={coffeeFromHere} />
										)
									);
								}}
								onMouseLeave={() => {
									setTooltipContent('');
								}}
								onClick={(e) => {
									if (getCurrentCoffeesByCountry(geo.properties.name).length) {
										handleClick(e);
									}
								}}
							/>
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default memo(CoffeeMap);
