import { getAllRoasteries } from './roasteriesSlice'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import sanityClient from '../../client'
import ImageUrlBuilder from '@sanity/image-url'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const RoastersList = () => {
	const builder = ImageUrlBuilder(sanityClient)
	function urlFor(source) {
		return builder.image(source)
	}

	const roasteries = useSelector(getAllRoasteries)
	const isLoading = useSelector((state) => state.roasteries.isLoading)
	const errMsg = useSelector((state) => state.roasteries.errMsg)

	if (isLoading) {
		return (
			<Row>
				<Loading />
			</Row>
		)
	}

	if (errMsg) {
		return (
			<Row>
				<Error errMsg={errMsg} />
			</Row>
		)
	}

	return (
		<Row className='align-items-center my-5'>
			{roasteries.map((roastery) => {
				return (
					<Col key={roastery._id} xs='6' sm='3' lg='2'>
						<a href={roastery.link}>
							<img
								src={urlFor(roastery.roasteryLogo).url()}
								alt={roastery.roasteryname}
								width='100%'
								height='100%'
							/>
						</a>
					</Col>
				)
			})}
		</Row>
	)
}

export default RoastersList
