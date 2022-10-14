import { Container, Row, Col } from 'reactstrap';
import ClassInfo from '../features/coffeeclasses/ClassInfo';
import CoffeeInfo from '../features/coffeemap/CoffeeInfo';

const TheCoffeePage = () => {
    return (
        <Container className='pt-5 text-center'>
            <Row className='px-4 justify-content-center'>
                <Col lg='10' xl='9'>
                <h2>all about the coffee</h2>
                we're passionate about coffee and we love to share! explore our offerings online with our interactive coffee map, or come in for a class to bring the good flavors home with you too. 
                </Col>
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