import { Row, Col } from 'react-bootstrap'
import { useMemo, useState } from 'react'
import { getAllClasses } from './classesSlice'
import { useSelector } from 'react-redux'
import ClassCard from './ClassCard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const ClassFilterSet = () => {
	const classes = useSelector(getAllClasses)
	const isLoading = useSelector((state) => state.classes.isLoading)
	const errMsg = useSelector((state) => state.classes.errMsg)

	const orderedClasses = classes
		.map((item) => ({ ...item, sortDate: new Date(item.date) }))
		.sort((classA, classB) => classA.sortDate - classB.sortDate)

	const [filterType, setFilterType] = useState(null)
	const [filterMonth, setFilterMonth] = useState(null)
	const [filterAvailability, setFilterAvailability] = useState(null)

	const resetAllFilter = () => {
		setFilterType(null)
		setFilterMonth(null)
		setFilterAvailability(null)
	}

	const getMonthName = (date) => {
		const curClassDate = new Date(date)
		return curClassDate
			.toLocaleString('en-US', {
				month: 'long',
			})
			.toLowerCase()
	}

	function getTypes(arr) {
		return arr.reduce(
			(acc, cur) =>
				acc.includes(cur.type.name) ? acc : [...acc, cur.type.name],
			[]
		)
	}
	const types = useMemo(() => getTypes(classes), [classes])

	function getMonths(arr) {
		return arr.reduce((acc, cur) => {
			const curClassMonth = getMonthName(cur.date)
			if (acc.includes(curClassMonth)) return acc
			return [...acc, curClassMonth]
		}, [])
	}
	const months = useMemo(() => getMonths(classes), [classes])

	const spaces = ['1', '2', '3', '4']

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
		<>
			<div className='class-filter-bar'>
				<div className='filter-section'>
					<h5>filters</h5>
					<button
						onClick={() => resetAllFilter()}
						className='reset-filter-button'
					>
						reset all
					</button>
				</div>

				<div className='filter-section'>
					<h5>class type</h5>
					<div className='my-btn-group'>
						{types.map((buttonLabel) => {
							const isActive =
								filterType &&
								filterType.toLowerCase() === buttonLabel.toLowerCase()
							return (
								<button
									key={buttonLabel}
									name={buttonLabel}
									onClick={(e) => setFilterType(e.target.name)}
									active={+isActive}
									className={isActive ? 'filter-on' : 'filter-off'}
								>
									{buttonLabel}
								</button>
							)
						})}
						<div>
							<button
								onClick={() => setFilterType(null)}
								className='reset-group-btn'
							>
								reset
							</button>
						</div>
					</div>
				</div>

				<div className='filter-section'>
					<h5>month</h5>
					<div className='my-btn-group'>
						{months.map((buttonLabel) => {
							const isActive =
								filterMonth &&
								filterMonth.toLowerCase() === buttonLabel.toLowerCase()
							return (
								<button
									key={buttonLabel}
									name={buttonLabel}
									onClick={(e) => setFilterMonth(e.target.name)}
									active={+isActive}
									className={isActive ? 'filter-on' : 'filter-off'}
								>
									{buttonLabel}
								</button>
							)
						})}
						<div>
							<button
								onClick={() => setFilterMonth(null)}
								className='reset-group-btn'
							>
								reset
							</button>
						</div>
					</div>
				</div>
				<div className='filter-section'>
					<h5>availability</h5>
					<div className='my-btn-group'>
						{spaces.map((buttonLabel) => {
							const isActive =
								filterAvailability &&
								filterAvailability.toLowerCase() === buttonLabel.toLowerCase()
							return (
								<button
									key={buttonLabel}
									name={buttonLabel}
									onClick={(e) => setFilterAvailability(e.target.name)}
									active={+isActive}
									className={isActive ? 'filter-on' : 'filter-off'}
								>
									{buttonLabel}
								</button>
							)
						})}
						<div>
							<button
								onClick={() => setFilterAvailability(null)}
								className='reset-group-btn'
							>
								reset
							</button>
						</div>
					</div>
				</div>
			</div>

			<Row className='justify-content-center mx-xl-5 mt-2 g-5'>
				{orderedClasses.map((workshop) => {
					if (filterType !== null && filterType !== workshop.type.name)
						return null

					if (
						filterAvailability !== null &&
						filterAvailability > workshop.availability
					)
						return null

					const workshopMonth = getMonthName(workshop.date)
					if (filterMonth !== null && filterMonth !== workshopMonth) return null

					return (
						<Col key={workshop._id} xs='10' sm='6' md='4' lg='3'>
							<ClassCard workshop={workshop} spaces={spaces} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default ClassFilterSet
