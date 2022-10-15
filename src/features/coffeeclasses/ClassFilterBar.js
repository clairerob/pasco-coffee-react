import {Row, Col, Button} from 'reactstrap';
import { useState } from 'react';
import { getAllWorkshops } from '../../app/shared/WORKSHOPS';
import ClassCard from './ClassCard';

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


    return (
        <>
            <Row className='class-filter-bar bg-dark'> 
                <Col>
                filters
                <Button onClick={() => resetFilter()}>reset all</Button>
                </Col>
                <Col>
                type

                <Button onClick={() => setFilterName('espresso')}>espresso</Button>
                <Button onClick={() => setFilterName('cupping')}>cupping</Button>
                <Button onClick={() => setFilterName('brewing')}>brewing</Button>
                <Button onClick={() => setFilterName('latte_art')}>latte art</Button>

                <Button onClick={() => resetName()}>clear</Button>
                </Col>
                <Col>
                month
                
                <Button onClick={() => setFilterMonth('november')}>november</Button>
                <Button onClick={() => setFilterMonth('december')}>december</Button>
                <Button onClick={() => setFilterMonth('january')}>january</Button>
                <Button onClick={() => setFilterMonth('february')}>february</Button>

                <Button onClick={() => resetMonth()}>clear</Button>
                </Col>
                <Col>
                spaces available (#)
                
                <Button onClick={() => setFilterAvailability(1)}>1</Button>
                <Button onClick={() => setFilterAvailability(2)}>2</Button>
                <Button onClick={() => setFilterAvailability(3)}>3</Button>
                <Button onClick={() => setFilterAvailability(4)}>4</Button>

                <Button onClick={() => resetAvailability()}>clear</Button>
                </Col>
            </Row>
            <Row className='justify-content-center mx-xl-5 mt-4 g-5'>
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