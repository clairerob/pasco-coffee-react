import { useState } from 'react';

// export const MyButtonGroup2 = (props) => (
// 	<div className='my-btn-group'>{props.children}</div>
// );

const MyButtonGroup = ({
	buttons,
	doSthAfterClick,
	doResetAfterClick,
	// resetAll
}) => {
	const [activeId, setActiveId] = useState(-1);

	const handleClick = (event, buttonLabel) => {
		setActiveId(buttonLabel);
		doSthAfterClick(event);
	};

	const handleResetClick = (event) => {
		setActiveId(-1);
		doResetAfterClick(event);
	};

	return (
		<div className='my-btn-group'>
			{buttons.map((buttonLabel) => (
				<button
					key={buttonLabel}
					name={buttonLabel}
					onClick={(event) => handleClick(event, buttonLabel)}
					className={
						buttonLabel === activeId
							? // && !resetAll
							  'filter-on'
							: 'filter-off'
					}
				>
					{buttonLabel}
				</button>
			))}
			<div>
				<button
					onClick={(event) => handleResetClick(event)}
					className='reset-group-btn'
				>
					reset
				</button>
			</div>
		</div>
	);
};

export default MyButtonGroup;
