import { Card } from 'react-bootstrap';


const ClassCard = ({ workshop }) => {
	const { name, description, date, image } = workshop;
	return (
		// link to booking class
		<Card className='coffee-class-card text-center border-light' style={{borderRadius: '20px'}}>
		    <Card.Img className='class-card-img' width='100%' src={image} alt={name} style={{borderRadius: '20px 20px 0 0'}}/>
		    <Card.ImgOverlay>
		        <Card.Title className='text-light'><h2>{name}</h2></Card.Title>
		    </Card.ImgOverlay>
		    <Card.Body>
		        <Card.Text>{description.toLowerCase()}</Card.Text>
		    <h4>{date}</h4>
		    </Card.Body>
			<Card.Footer style={{borderRadius: '0 0 20px 20px', backgroundColor: 'var(--dark-green-text-color)', color: 'white'}}>
				<h3>book now</h3>
			</Card.Footer>
		</Card>
	);
};

export default ClassCard;
