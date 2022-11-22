import { Container, Row, Col } from 'react-bootstrap'
import AboutContent from '../features/AboutContent'
import { Link } from 'react-router-dom'

const AboutPage = () => {
	return (
		<div>
			<Container className='pt-5 aboutpage-container'>
				<Row>
					<Col className='text-center'>
						<h1>about us</h1>
					</Col>
				</Row>
				<AboutContent />
				<Row className='justify-content-center gap-4'>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/coffee'>
							<button className='aboutpage-btn'>learn more about coffee</button>
						</Link>
					</Col>
					<Col xs='8' md='4' className='py-3'>
						<Link to='/menu'>
							<button className='aboutpage-btn'>see the menu</button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutPage
