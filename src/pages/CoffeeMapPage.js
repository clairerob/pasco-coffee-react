import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import CoffeeMap from '../features/coffeemap/CoffeeMap';
import { Container, Row, Col } from 'react-bootstrap';
import RoastersList from '../features/coffeemap/RoastersList';

const CoffeeMapPage = () => {
	const [tooltipContent, setTooltipContent] = useState('');

	return (
		<div className='mapPage'>
			<h1 className='text-center m-5'>the coffee map</h1>

			<Container>
				<Row>
					<Col lg='3' className='order-lg-last m-md-4 px-5 px-lg-3'>
						<p>
							the great variety in coffee we serve comes partly from the
							preparation, partly from the roast, and in huge part from the
							growing process.
							<hr className='coffee-map-info' />
							location and varietal are hugely important to the final cup, as
							well as the care taken in growing and processing those beans - we
							serve our single origin brewed coffees to highlight the distinct
							elements of each one.
							<hr className='coffee-map-info' />
							we work with roasteries that take care to select the very best,
							specialty-grade coffees, and have created this interactive map to
							allow you to explore the different tasting notes and styles of
							coffee each region cultivates.
							<hr className='coffee-map-info' />
							you'll notice, for example, that kenya often produces very
							fruit-forward coffees, or that brazil tends towards chocolatey,
							nutty notes. this can be a great way to help you find something
							you might like - but there's always something new, and you might
							be surprised at what you love next!
						</p>
					</Col>
					<Col className='mt-lg-5'>
						<CoffeeMap setTooltipContent={setTooltipContent} />
						<ReactTooltip
							multiline
							clickable
							textColor='#b33f'
							backgroundColor='#FDBE59'
							arrowColor='rgb(1,1,1,0)'
							className='tooltip'
						>
							{tooltipContent}
						</ReactTooltip>
					</Col>
				</Row>
					<RoastersList />
			</Container>
		</div>
	);
};

export default CoffeeMapPage;
