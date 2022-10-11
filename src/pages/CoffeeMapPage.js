// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import CoffeeMap from '../features/coffeemap/CoffeeMap';
import { Container, Row, Col } from 'react-bootstrap';

const CoffeeMapPage = () => {
	// const [popoverOpen, setPopoverOpen] = useState(false);
	// const toggle = () => setPopoverOpen(!popoverOpen);

	const [tooltipContent, setTooltipContent] = useState('');

	return (
		<div className='mapPage'>
			{/* <button id='testing' onClick={toggle}>
				CoffeeMapPAGE
			</button>

			<Popover
				placement='right'
				isOpen={popoverOpen}
				target='testing'
				toggle={toggle}
			>
				<PopoverHeader>Coffee Test</PopoverHeader>
				<PopoverBody>
					Facts and flavors about whatever the coffee happens to be and taste
					like and maybe more details, do I want a link to order it or no?
				</PopoverBody>
			</Popover> */}

			<h1>CoffeeMapPage</h1>

			<Container>
				<Row >
					<Col lg='3' className='order-lg-last m-5'>Some text about the map and the countries and the coffees, learning things is fun and tasting things is good</Col>
					<Col>
						<CoffeeMap setTooltipContent={setTooltipContent} />
						<ReactTooltip
							multiline
							clickable
							textColor='gold'
							backgroundColor='#248637'
							arrowColor='rgb(1,1,1,0)'
						>
							{tooltipContent}
						</ReactTooltip>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CoffeeMapPage;
