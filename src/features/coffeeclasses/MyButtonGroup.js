import { useState } from 'react';

const MyButtonGroup = ({buttons, doSthAfterClick, doResetAfterClick}) => {
    const [activeId, setActiveId] = useState(-1);

    const handleClick = (event, id) => {
        setActiveId(id);
        doSthAfterClick(event);
    };

    const handleResetClick = (event) => {
        setActiveId(-1);
        doResetAfterClick(event);
    }

    return (
        <div className='my-btn-group'>
            {buttons.map((buttonLabel, i) => (
                <button key={i} name={buttonLabel}
                onClick={(event) => handleClick(event, i)}
                className={i === activeId ? 'filter-on' : 'filter-off'}>
                    {buttonLabel}
                </button>
            ))}
            <div>
            <button onClick={(event) => handleResetClick(event)}
            className='reset-group-btn'>reset</button>
            </div>
        </div>
    )
};

export default MyButtonGroup;