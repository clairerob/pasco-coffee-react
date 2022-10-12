import { Container, Row, Col } from 'reactstrap';
import { getAllWorkshops } from '../../app/shared/WORKSHOPS';
import ClassCard from './ClassCard';


const ClassList = () => {
    
const workshops = getAllWorkshops();

    return (
        <Container>
            <Row>
                {workshops.map(workshop => {
                    return (
                    <Col key={workshop.id}>
                    <ClassCard workshop={workshop} />
                    </Col>
                    );
                })}
            </Row>
        </Container>
    )
};

export default ClassList;