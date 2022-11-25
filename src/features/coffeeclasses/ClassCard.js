import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react'
import sanityClient from '../../client'
import ImageUrlBuilder from '@sanity/image-url'

const ClassCard = ({ workshop, spaces }) => {
	const { name, date, availability, type, classTitle } = workshop

	const builder = ImageUrlBuilder(sanityClient)
	function urlFor(source) {
		return builder.image(source)
	}

	const availablePlaces = spaces.filter((space) => availability >= space)

	const [places, setPlaces] = useState(1)

	const [show, setShow] = useState(false)
	const handleOpen = () => setShow(true)
	const handleClose = () => {
		setShow(false)
		setPlaces(1)
	}

	const handleChange = (e) => {
		setPlaces((sp) => e.target.value)
	}

	const handleSubmit = (e) => {
		alert('places selected:' + places + name + date)
		e.preventDefault()
		handleClose()
	}

	return (
		<>
			<Card
				className='coffee-class-card text-center border-light h-100'
				style={{ borderRadius: '20px' }}
				onClick={availability ? handleOpen : null}
			>
				<Card.Img
					className='class-card-img'
					width='100%'
					src={urlFor(type.classImage).url()}
					alt={type.name}
					style={{ borderRadius: '20px 20px 0 0' }}
				/>
				<Card.ImgOverlay>
					<Card.Title
						style={{
							color: availability ? '#fff' : 'grey',
							textShadow: '2px 2px 3px black',
						}}
					>
						<h2>{type.name}</h2>
					</Card.Title>
				</Card.ImgOverlay>
				<Card.Body>
					<h5>{date}</h5>
					<Card.Text>{type.description.toLowerCase()}</Card.Text>
				</Card.Body>
				<Card.Footer
					style={{
						borderRadius: '0 0 20px 20px',
						backgroundColor: availability
							? 'var(--dark-green-text-color)'
							: 'grey',
						color: 'white',
					}}
				>
					{availability ? <h3>book now</h3> : <h3>class fully booked</h3>}
				</Card.Footer>
			</Card>

			<Modal
				show={show}
				onHide={handleClose}
				centered
				className='text-center class-modal'
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{classTitle} class: {date}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<label style={{ fontSize: '20px' }}>Number of places:</label>
						<select
							value={places}
							onChange={handleChange}
							style={{ width: '50px', marginLeft: '20px', padding: '5px' }}
						>
							{availablePlaces.map((num) => (
								<option value={num} key={num}>
									{num}
								</option>
							))}
						</select>
						<div>
							<button
								type='submit'
								className='class-modal-btn class-modal-continue-btn'
								// onClick={handleSubmit}
							>
								continue to payment
							</button>
						</div>
					</form>

					<button
						className='class-modal-btn class-modal-cancel-btn'
						onClick={handleClose}
					>
						close
					</button>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ClassCard
