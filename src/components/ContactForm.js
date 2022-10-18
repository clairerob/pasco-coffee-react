import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormGroup, Label, Col } from 'reactstrap';
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
							<Label htmlFor='name'>name</Label>
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
							<Label htmlFor='email'>email</Label>
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
							<Label check xs={{offset:1}} md={{offset:0}} lg={{offset:1}} xl={{offset:2}}>
							<Field
								name='agree'
								type='checkbox'
								className='form-check-input text-info'
							/>
							{' '}may we contact you?
							</Label>
						</Col>
					</FormGroup>
					<FormGroup row className='justify-content-center'>
						<Col xs='10' md='12' lg='10' xl='8'>
							<Label htmlFor='comment'>what do you want to ask/tell us?</Label>
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
