import { Row, Col } from 'react-bootstrap'
import owner from '../app/assets/owner.jpg'

const AboutContent = () => {
	return (
		<Row className='mx-5 py-5 gx-5 gy-4 align-items-center'>
			<Col md='6'>
				<img src={owner} className='img-fluid aboutpage-img' alt='owner' />
			</Col>
			<Col className='aboutpage-text'>
				<p>
					words that willie will give me... Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum
				</p>
			</Col>
		</Row>
	)
}

export default AboutContent
