import { Row, Col } from 'react-bootstrap';
import { getAllWorkshops } from '../../app/shared/WORKSHOPS';
import ClassCard from './ClassCard';


const ClassList = () => {
    
const workshops = getAllWorkshops();

    return (
            <Row className='justify-content-center mx-xl-5 mt-4 g-5'>
                {workshops.map(workshop => {
                    return (
                    <Col key={workshop.id} xs='10' sm='6' md='4' lg='3'>
                    <ClassCard workshop={workshop} />
                    </Col>
                    );
                })}
            </Row>
    )
};

export default ClassList;