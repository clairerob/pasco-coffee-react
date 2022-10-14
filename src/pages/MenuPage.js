import { Container, Row, Col } from 'reactstrap';
import MenuList from '../features/menu/MenuList';
import CoffeeMenuList from '../features/menu/CoffeeMenuList';

const MenuPage = () => {
    return (
        <Container className='text-center menu-container pt-5'>
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
        </Container>
    )
};

export default MenuPage;