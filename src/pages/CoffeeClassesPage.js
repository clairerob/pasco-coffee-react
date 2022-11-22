// import ClassList from '../features/coffeeclasses/ClassList';
import { Container, Row, Col } from 'react-bootstrap';
import ClassFilterSet from '../features/coffeeclasses/ClassFilterSet';
import { Link } from 'react-router-dom';

const CoffeeClassesPage = () => {
	return (
		<div>
			<h1 className='text-center pt-5'>pasco coffee classes</h1>

			<Container>
				<Row className='justify-content-center'>
					<Col className='class-page-intro-text page-overlay text-center mt-2 mt-md-4 pt-3 mb-3' lg='10' xl='8'>
						<p>
							we regularly run a variety of classes in our shop. search our
							options below to see what best fits your needs, and book online or
							in person at our store. if there's something you'd link to learn
							that we don't already have listed, or to schedule a private
							workshop, get in touch using our{' '}
							<Link to='/contact'>contact form</Link> today.
						</p>
					</Col>
				</Row>
				<ClassFilterSet />
			</Container>
		</div>
	);
};

export default CoffeeClassesPage;
