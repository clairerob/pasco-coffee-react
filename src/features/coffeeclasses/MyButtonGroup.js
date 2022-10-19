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
        <>
            {/* <button>one</button>
            <button>two</button>
            <button>three</button>
            <button>four</button> */}
            {buttons.map((buttonLabel, i) => (
                <button key={i} name={buttonLabel}
                onClick={(event) => handleClick(event, i)}
                className={i === activeId ? 'filter-on' : 'filter-off'}>
                    {buttonLabel}
                </button>
            ))}
            <button onClick={(event) => handleResetClick(event)}>reset</button>
        </>
    )
};

export default MyButtonGroup;