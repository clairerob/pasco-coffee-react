import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormGroup, Col } from 'react-bootstrap';
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
					<FormGroup row className='justify-content-center'>
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
					</FormGroup>
					<FormGroup row className='justify-content-center'>
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
					</FormGroup>
					<FormGroup row className='justify-content-center'>
						<Col >
							<Form.Label check xs={{offset:1}} md={{offset:0}} lg={{offset:1}} xl={{offset:2}}>
							<Field
								name='agree'
								type='checkbox'
								className='form-check-input text-info'
							/>
							{' '}may we contact you?
							</Form.Label>
						</Col>
					</FormGroup>
					<FormGroup row className='justify-content-center'>
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
					</FormGroup>
					<Col className='text-center'>
					<Button type='submit' className='btn-light contact-submit-btn'>submit</Button>
					</Col>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;
