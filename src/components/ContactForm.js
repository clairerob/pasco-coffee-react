import { ErrorMessage, Field, Formik } from 'formik';
import { Button, Form, Col } from 'react-bootstrap';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
	const handleSubmit = (values, { resetForm }) => {
		console.log('form values in JSON:', JSON.stringify(values));
		resetForm();
	};
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
				<Form>
					<Form.Group row='true' className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<Form.Label htmlFor='name'>name</Form.Label>
							<Field
								name='name'
								placeholder='name'
								className='form-control'
							></Field>
							<ErrorMessage name='name'>
								{(msg) => <p className='text-danger'>{msg}</p>}
							</ErrorMessage>
						</Col>
					</Form.Group>
					<Form.Group row='true' className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<Form.Label htmlFor='email'>email</Form.Label>
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
					</Form.Group>
					<Form.Group row='true' className='justify-content-center'>
						<Col >
							<Form.Label check='true' xs={{offset:1}} md={{offset:0}} lg={{offset:1}} xl={{offset:2}}>
							<Field
								name='agree'
								type='checkbox'
								className='form-check-input text-info'
							/>
							{' '}may we contact you?
							</Form.Label>
						</Col>
					</Form.Group>
					<Form.Group row='true' className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<Form.Label htmlFor='comment'>what's up?</Form.Label>
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
					</Form.Group>
					<Col className='mt-4' xs='10' md='12' lg='10' xl='8'>
					<Button type='submit' className='btn-light contact-submit-btn'>submit</Button>
					</Col>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;
