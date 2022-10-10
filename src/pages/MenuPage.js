import { Container, Row } from 'reactstrap';
import MenuList from '../features/menu/MenuList';
import CoffeeMenuList from '../features/coffeemap/CoffeeMenuList';

const MenuPage = () => {
    return (
        <Container className='text-center'>
            <h1>menu</h1>
            <Row>
            <p>house-made flavours and cold brew concoctions</p>
            <MenuList />
            <hr/>
            </Row>
            <Row>
            <p>an ever-changing selection of single-origins, hand-brewed to order. prices vary.</p>
            <CoffeeMenuList />
            </Row>
        </Container>
    )
};

export default MenuPage;