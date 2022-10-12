import { Container, Row, Col } from 'reactstrap';
import ClassInfo from '../features/coffeeclasses/ClassInfo';
import CoffeeInfo from '../features/coffeemap/CoffeeInfo';

const TheCoffeePage = () => {
    return (
        <Container>
            <Row>
                we're passionate about coffee and we love to share! explore our offerings online with our interactive coffee map, or come in for a class to bring the good flavors home with you too. 
            </Row>
            <Row>
                <Col>
                    <ClassInfo />
                </Col>
                <Col>
                    <CoffeeInfo />
                </Col>
            </Row>
        </Container>
    )
};

export default TheCoffeePage;