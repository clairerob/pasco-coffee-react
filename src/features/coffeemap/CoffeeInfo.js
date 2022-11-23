import v60 from '../../app/assets/v60.jpg'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoffeeInfo = () => {
	return (
		<Row className='align-items-space-between row-content mx-3 my-5'>
			<Col>
				<img
					className='ml-3 img-fluid coffee-info-img'
					src={v60}
					alt='some coffee'
				/>
			</Col>
			<Col
				sm='6'
				lg='4'
				className='align-self-center mt-3 text-center text-sm-left'
			>
				<h1>our coffee</h1>
				<p className='info-text'>
					we work with roasters from around the US to bring you the very best we
					can find! learn more about the roasters and beans currently available{' '}
				</p>
				<Link to='/coffee-map'>
					<button className='info-link-btn'>here</button>
				</Link>
			</Col>
		</Row>
	)
}

export default CoffeeInfo
