import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from 'react-simple-maps';
import { memo } from 'react';
import mymap from '../../app/assets/mymap.json';
import { getCurrentCoffeeCountries, getCurrentCoffeesByCountry } from '../../app/shared/COFFEES';

const geoUrl = mymap;
// 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const highlightedCountries = getCurrentCoffeeCountries();

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
								style={{
									default: { fill: '#38a', stroke: '#38a', outline: 'none' },
									hover: {
										fill: '#a33',
										stroke: '#ae1',
										strokeWidth: 2,
										outline: 'none',
									},
									pressed: {
										fill: '#c3c',
										stroke: '#ae1',
										strokeWidth: 2.5,
										outline: 'none',
									},
								}}
								onMouseEnter={() => {
									const coffeeFromHere = getCurrentCoffeesByCountry(
										geo.properties.SOVEREIGNT
									);
									console.log(coffeeFromHere[0].name);
									setTooltipContent(
										`${coffeeFromHere[0].country} \n
										${coffeeFromHere[0].name} \n
										${coffeeFromHere[0].description}`
									);
								}}
								onMouseLeave={() => {
									setTooltipContent('');
								}}
							/>
						))
					}
				</Geographies>
				<Marker coordinates={[-74.006, 40.7128]}>
					<text>HERE I AM</text>
				</Marker>

				<Marker coordinates={[-102, 38]}>
					<text textAnchor='middle' fill='#F53'>
						USA
					</text>
				</Marker>
			</ComposableMap>
		</div>
	);
};

export default memo(CoffeeMap);
