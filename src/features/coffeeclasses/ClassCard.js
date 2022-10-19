import { Card } from 'react-bootstrap';


const ClassCard = ({ workshop }) => {
	const { name, description, date, image } = workshop;
	return (
		// link to booking class
		<Card className='coffee-class-card text-center border-light'>
		    <Card.Img className='class-card-img' width='100%' src={image} alt={name} />
		    <Card.ImgOverlay>
		        <Card.Title className='text-light'><h2>{name}</h2></Card.Title>
		    </Card.ImgOverlay>
		    <Card.Body>
		        <Card.Text>{description.toLowerCase()}</Card.Text>
		    <h4>{date}</h4>
		    </Card.Body>
			<Card.Footer>
				book now
			</Card.Footer>
		</Card>
	);
};

export default ClassCard;
