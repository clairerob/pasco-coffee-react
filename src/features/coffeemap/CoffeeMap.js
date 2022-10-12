import {
	ComposableMap,
	Geographies,
	Geography,
} from 'react-simple-maps';
import { memo } from 'react';
import mymap from '../../app/assets/mymap.json';
import { getCurrentCoffeesByCountry } from '../../app/shared/COFFEES';
import CoffeeTooltip from './CoffeeTooltip';

const geoUrl = mymap;
// 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

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
	default:
			{
					fill: '#d55',
					stroke: '#d55',
					outline: 'none',
			  },
		
		hover: {
			fill: '#b33',
			stroke: '#b33',
			strokeWidth: 2,
			outline: 'none',
		},
		pressed: {
			fill: '#b33',
			stroke: '#b33',
			strokeWidth: 2,
			outline: 'none',
		},
	};

const CoffeeMap = ({ setTooltipContent }) => {
	return (
		<div data-tip=''>
			<ComposableMap projectionConfig={{ scale: 220, center: [23, 0] }}>
				<Geographies geography={geoUrl}>
					{({ geographies, borders, outline }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								style={getCurrentCoffeesByCountry(geo.properties.SOVEREIGNT)
										.length
										? coffeeCountryStyles
										: worldStyles
									}
								onMouseEnter={() => {
									const coffeeFromHere = getCurrentCoffeesByCountry(
										geo.properties.SOVEREIGNT
									);
									setTooltipContent(
										coffeeFromHere.length > 0 && <CoffeeTooltip coffeeFromHere={coffeeFromHere}/>
									);
								}}
								onMouseLeave={() => {
									setTooltipContent('');
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
