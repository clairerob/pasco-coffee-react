import { ErrorMessage, Field, Formik, Form } from 'formik'
import { Col, Row } from 'react-bootstrap'
import { validateContactForm } from '../utils/validateContactForm'

const ContactForm = () => {
	const handleSubmit = (values, { resetForm }) => {
		console.log('form values in JSON:', JSON.stringify(values))
		resetForm()
	}
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					agree: false,
					comment: '',
				}}
				onSubmit={handleSubmit}
				validate={validateContactForm}
			>
				<Form className='contact-form' name='contact-form'>
					<Row className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<label htmlFor='name'>name</label>
							<Field
								name='name'
								placeholder='name'
								className='form-control'
							></Field>
							<ErrorMessage name='name'>
								{(msg) => <p className='text-danger'>{msg}</p>}
							</ErrorMessage>
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<label htmlFor='email'>email</label>
							<Field
								name='email'
								placeholder='email'
								type='email'
								className='form-control'
							></Field>
							<ErrorMessage name='email'>
								{(msg) => <p className='text-danger'>{msg}</p>}
							</ErrorMessage>
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<Col
							xs={{ offset: 1 }}
							md={{ offset: 0 }}
							lg={{ offset: 1 }}
							xl={{ offset: 2 }}
							className='mt-2'
						>
							<label check='true'>
								<Field
									name='agree'
									type='checkbox'
									className='form-check-input text-info'
								/>{' '}
								may we contact you?
							</label>
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<label htmlFor='comment'>what's up?</label>
							<Field
								name='comment'
								as='textarea'
								rows='4'
								className='form-control'
							></Field>
							<ErrorMessage name='comment'>
								{(msg) => <p className='text-danger'>{msg}</p>}
							</ErrorMessage>
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<Col className='mt-4' xs='10' md='12' lg='10' xl='8'>
							<button type='submit' className='contact-submit-btn'>
								submit
							</button>
						</Col>
					</Row>
				</Form>
			</Formik>
		</>
	)
}

export default ContactForm
