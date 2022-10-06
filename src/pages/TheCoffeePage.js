import { Container, Row, Col } from 'reactstrap';
import ClassCard from '../features/coffeeclasses/ClassCard';
import CoffeeCard from '../features/coffeemap/CoffeeCard';

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
};

export default TheCoffeePage;