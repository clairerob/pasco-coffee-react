import { Container, Row, Col } from 'reactstrap';
import ClassCard from '../features/coffeeclasses/ClassCard';
import CoffeeCard from '../features/coffeemap/CoffeeCard';

const TheCoffeePage = () => {
    return (
        <Container>
            <Row>
                we're passionate about coffee and we love to share! explore our offerings online with our interactive coffee map, or come in for a class to bring the good flavors home with you too. 
            </Row>
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