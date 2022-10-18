import {Row, Col, Button} from 'reactstrap';
import { useState } from 'react';
import { getAllWorkshops } from '../../app/shared/WORKSHOPS';
import ClassCard from './ClassCard';
import MyButtonGroup from './ButtonGroup';

const ClassFilterBar = () => {
const workshops = getAllWorkshops();

    const [filterName, setFilterName] = useState(null);
    const [filterMonth, setFilterMonth] = useState(null);
    const [filterAvailability, setFilterAvailability] = useState(null);

    const resetFilter = () => {
        setFilterName(null);
        setFilterMonth(null);
        setFilterAvailability(null);
    };

    const resetName = () => {
        setFilterName(null);
    };

    const resetMonth = () => {
        setFilterMonth(null);
    };

    const resetAvailability = () => {
        setFilterAvailability(null);
    };



    const filterNameAfterClick = (event) => {
        setFilterName(event.target.name);
	};
    
    const filterMonthAfterClick = (event) => {
        setFilterMonth(event.target.name);
	};

    const filterAvailabilityAfterClick = (event) => {
        setFilterAvailability(event.target.name);
	}

    return (
        <>
            
			<MyButtonGroup buttons={['espresso', 'cupping', 'brewing', 'latte-art']}
			doSthAfterClick={filterNameAfterClick}/> 

			<MyButtonGroup buttons={['november', 'december', 'january', 'february']}
			doSthAfterClick={filterMonthAfterClick}/> 

			<MyButtonGroup buttons={['1', '2', '3', '4']}
			doSthAfterClick={filterAvailabilityAfterClick}/>
            
            <Row>
                <Col>filters</Col>
                <Col>type</Col>
                <Col>month</Col>
                <Col>spaces available</Col>
            </Row>

            <Row className='class-filter-bar'> 
                <Col className='reset-all-class-filters'>
                <Button onClick={() => resetFilter()}>reset all</Button>
                </Col>

                <Col>
                <Button onClick={() => setFilterName('espresso')}>espresso</Button>
                <Button onClick={() => setFilterName('cupping')}>cupping</Button>
                <Button onClick={() => setFilterName('brewing')}>brewing</Button>
                <Button onClick={() => setFilterName('latte-art')} className='mr-md-3'>latte art</Button>

                <Button onClick={() => resetName()}>clear</Button>
                </Col>

                <Col>
                <Button onClick={() => setFilterMonth('november')}>november</Button>
                <Button onClick={() => setFilterMonth('december')}>december</Button>
                <Button onClick={() => setFilterMonth('january')}>january</Button>
                <Button onClick={() => setFilterMonth('february')}>february</Button>

                <Button onClick={() => resetMonth()}>clear</Button>
                </Col>

                <Col>
                <Button onClick={() => setFilterAvailability(1)}>1</Button>
                <Button onClick={() => setFilterAvailability(2)}>2</Button>
                <Button onClick={() => setFilterAvailability(3)}>3</Button>
                <Button onClick={() => setFilterAvailability(4)}>4</Button>

                <Button onClick={() => resetAvailability()}>clear</Button>
                </Col>
            </Row>

            <Row className='justify-content-center mx-xl-5 mt-2 g-5'>
                {workshops.map((workshop) => {

                    if (filterName !== null && filterName !== workshop.name) return null;

                    if (filterAvailability !== null && filterAvailability > workshop.spaces) return null;

                    if (filterMonth !== null && filterMonth !== workshop.month) return null;

                    return (
                        <Col key={workshop.id} xs='10' sm='6' md='4' lg='3'>
                        <ClassCard workshop={workshop}/>
                        </Col>
                    )
                })}
            </Row>
            </>
    )
};

export default ClassFilterBar;