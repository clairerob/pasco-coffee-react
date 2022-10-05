import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col>
                        location
                        and hours
                    </Col>
                    <Col>
                        <h5>sitemap</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/menu'>menu</Link>
                            </li>
                            <li>
                                <Link to='/about'>about</Link>
                            </li>
                            <li>
                                <Link to='/coffee-map'>the coffee map</Link>
                            </li>
                            <li>
                                <Link to='/coffee-classes'>coffee classes</Link>
                            </li>
                        </ul>

                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </Col>
                    <Col>
                        ContactForm
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;