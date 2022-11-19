import { Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ClassCard = ({ workshop }) => {
	const { name, description, date, image } = workshop;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleOpen = () => setShow(true);

	// const doLog = () => console.log('i click');
	return (
		<>
			<Card
				className='coffee-class-card text-center border-light'
				style={{ borderRadius: '20px' }}
				onClick={handleOpen}
			>
				<Card.Img
					className='class-card-img'
					width='100%'
					src={image}
					alt={name}
					style={{ borderRadius: '20px 20px 0 0' }}
				/>
				<Card.ImgOverlay>
					<Card.Title className='text-light'>
						<h2>{name}</h2>
					</Card.Title>
				</Card.ImgOverlay>
				<Card.Body>
					<Card.Text>{description.toLowerCase()}</Card.Text>
					<h4>{date}</h4>
				</Card.Body>
				<Card.Footer
					style={{
						borderRadius: '0 0 20px 20px',
						backgroundColor: 'var(--dark-green-text-color)',
						color: 'white',
					}}
				>
					<h3>book now</h3>
				</Card.Footer>
			</Card>

			<Modal show={show} onHide={handleClose} centered className='text-center'>
				<Modal.Header closeButton>
					<Modal.Title>
						{name} class: {date}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					form probably with formik to connect to stripe payment page but not
					building until I look at stripe docs
				</Modal.Body>
				<Modal.Footer>
					<div>
						<Button onClick={handleClose}>close</Button>
					</div>
					<div>
						<Button onClick={handleClose}>
							confirm and continue to payment bit
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ClassCard;
