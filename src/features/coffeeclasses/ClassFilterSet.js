import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { getAllClasses } from './classesSlice'
import { useSelector } from 'react-redux'
import ClassCard from './ClassCard'

const ClassFilterSet = () => {
	const workshops = useSelector(getAllClasses)

	const [filterType, setFilterType] = useState(null)
	const [filterMonth, setFilterMonth] = useState(null)
	const [filterAvailability, setFilterAvailability] = useState(null)

	const resetAllFilter = () => {
		setFilterType(null)
		setFilterMonth(null)
		setFilterAvailability(null)
	}

	const types = ['espresso', 'cupping', 'brewing', 'latte-art']
	const months = ['november', 'december', 'january', 'february']
	const spaces = ['1', '2', '3', '4']

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
									active={isActive}
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
									active={isActive}
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
									active={isActive}
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
				{workshops.map((workshop) => {
					if (filterType !== null && filterType !== workshop.name) return null

					if (
						filterAvailability !== null &&
						filterAvailability > workshop.spaces
					)
						return null

					if (filterMonth !== null && filterMonth !== workshop.month)
						return null

					return (
						<Col key={workshop.id} xs='10' sm='6' md='4' lg='3'>
							<ClassCard workshop={workshop} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default ClassFilterSet
