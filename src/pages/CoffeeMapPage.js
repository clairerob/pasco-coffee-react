
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import CoffeeMap from '../features/coffeemap/CoffeeMap';


const CoffeeMapPage = () => {
    
const [popoverOpen, setPopoverOpen] = useState(false);
const toggle = () => setPopoverOpen(!popoverOpen);

const [tooltipContent, setTooltipContent] = useState('');

	return (
		<div>
			<button id='testing' onClick={toggle}>
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
			</Popover>

            <CoffeeMap  setTooltipContent={setTooltipContent}/>
            <Tooltip>{tooltipContent}</Tooltip>
			
		</div>
	);
};

export default CoffeeMapPage;
