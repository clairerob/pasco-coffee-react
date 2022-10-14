import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';


const ClassCard = ({ workshop }) => {
	const { name, description, date, image } = workshop;
	return (
		// link to booking class
		<Card className='coffee-class-card text-center border-light'>
		    <CardImg className='class-card-img' width='100%' src={image} alt={name} />
		    <CardImgOverlay>
		        <CardTitle className='text-light'><h2>{name}</h2></CardTitle>
		    </CardImgOverlay>
		    <CardBody>
		        <CardText>{description}</CardText>
		    <h4>{date}</h4>
		    </CardBody>
			<CardFooter>
				book now
			</CardFooter>
		</Card>
	);
};

export default ClassCard;
