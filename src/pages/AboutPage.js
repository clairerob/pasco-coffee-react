import owner from '../app/assets/owner.jpg';
import { Container, Row, Col, Button } from 'reactstrap';

const AboutPage = () => {
	return (
		<div>
			<h1>AboutPAGE</h1>
			<Container>
				<Row>
					<Col sm='6'>
						<img src={owner} className='img-fluid' alt='photo-of-owner' />
					</Col>
					<Col>
						words that willie will give me... Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</Col>
				</Row>
				<Row>
					<Col>
						<Button>learn more about coffee</Button>
						<Button>see the menu</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutPage;
