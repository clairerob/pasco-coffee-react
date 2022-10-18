import { useState } from 'react';

const MyButtonGroup = ({buttons, doSthAfterClick}) => {
    const [activeId, setActiveId] = useState(-1);

    const handleClick = (event, id) => {
        setActiveId(id);
        doSthAfterClick(event);
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
        </>
    )
};

export default MyButtonGroup;