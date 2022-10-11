import { Row, Col, Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import latte from '../../app/assets/latte-pour.jpg';


const ClassCard = ({ workshop }) => {
	// const { image, name, description, date } = workshop;
	return (
		// link to booking class
		// <Card>
		//     {/* <CardImg width='100%' src={image} alt={name} />
		//     <CardImgOverlay>
		//         <CardTitle>{name}, {date}</CardTitle>
		//     </CardImgOverlay>
		//     <CardBody>
		//         <CardText>{description}</CardText>
		//     </CardBody> */}
		//     <h1>classname</h1>
		//     <p>words about class</p>
		// </Card>


			<Row className='align-items-space-between row-content mx-3 my-5'>
				<Col>
					<img className='ml-3 img-fluid' alt='barista' src={latte} />
				</Col>
				<Col sm='6' lg='4' className='align-self-center order-sm-first'>
					<h1>classes</h1>
					<p>
						join us for cupping sessions, home brewing and espresso classes{' '}
						<Link to='/coffee-classes' class='btn btn-dark'>
							book now
						</Link>
					</p>
				</Col>
			</Row>
	);
};

export default ClassCard;
