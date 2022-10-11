import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from 'react-simple-maps';

const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const CoffeeMapPage = () => {
	return (
		<div>
			<h1>CoffeeMapPAGE</h1>
			<ComposableMap projectionConfig={{ scale: 240, center: [3, 0] }}>
				<Geographies geography={geoUrl}>
					{({ geographies, borders, outline }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								style={{
									default: { fill: '#38a', stroke: '#ae1' },
									hover: { fill: '#a33', stroke: '#ae1', strokeWidth: 2.5 },
									pressed: { fill: '#c3c', stroke: '#ae1', strokeWidth: 2.5 },
								}}
							/>
						))
					}
				</Geographies>
				<Marker coordinates={[-74.006, 40.7128]}>
					<p>HERE I AM</p>
				</Marker>

				<Marker coordinates={[-102, 38]} fill='#777'>
					<text textAnchor='middle' fill='#F53'>
						USA
					</text>
				</Marker>
			</ComposableMap>
		</div>
	);
};

export default CoffeeMapPage;
