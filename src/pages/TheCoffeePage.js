import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClassCard from '../features/coffeeclasses/ClassCard';

const TheCoffeePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ClassCard />
                </Col>
                <Col>
                    <CoffeeCard />
                </Col>
            </Row>
        </Container>
    )
}