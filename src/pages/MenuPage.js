import { Container, Row, Col, Button } from 'react-bootstrap';
import MenuList from '../features/menu/MenuList';
import CoffeeMenuList from '../features/menu/CoffeeMenuList';

const MenuPage = () => {
    return (
        <Container className='text-center menu-container pt-5 page-overlay'>
            <Row>
                <Col>
                <h1>menu</h1>
                </Col>
            </Row>
            <Row>
            <Col xs='12' className='pt-3 pb-5'><h5>house-made flavours and cold brew concoctions</h5></Col>
            <MenuList/>
            <hr className='menupage-hr'/>
            </Row>
            <Row>
            <Col xs='12' className='py-4'><h5>an ever-changing selection of single-origins, hand-brewed to order. prices vary.</h5></Col>
            <CoffeeMenuList />
            </Row>
            <Row className='text-center pt-5 px-3 px-md-5'>
                <Col>
                <a href='https://pasco-farms.square.site/pasco-coffee-bar'><Button className='btn-light btn-lg px-5'><h2>order online here</h2></Button></a>
                </Col>
            </Row>
        </Container>
    )
};

export default MenuPage;