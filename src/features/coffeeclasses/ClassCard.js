import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';


const ClassCard = ({ workshop }) => {
	const { name, description, date, image } = workshop;
	return (
		// link to booking class
		<Card>
		    <CardImg width='100%' height='100%' src={image} alt={name} />
		    <CardImgOverlay>
		        <CardTitle>{name}, {date}</CardTitle>
		    </CardImgOverlay>
		    <CardBody>
		        <CardText>{description}</CardText>
		    </CardBody>
		    <h1>classname</h1>
		    <p>words about class</p>
		</Card>
	);
};

export default ClassCard;
