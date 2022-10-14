import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import {validateContactForm} from './validateContactForm';


const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values in JSON:', JSON.stringify(values));
        resetForm();
    }
	return (
		<>
			<p>this is a form soon</p>
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
                    <FormGroup>
					<Label htmlFor='name'>name</Label>
					<Field name='name' placeholder='name' className='form-control'></Field>
					<ErrorMessage name='name'>{(msg) => <p>{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
					<Label htmlFor='email'>email</Label>
					<Field name='email' placeholder='email' type='email' className='form-control'></Field>
					<ErrorMessage name='email'>oops</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label check htmlFor='agree'>may we contact you?</Label>
                        <Field name='agree' type='checkbox' className='form-check-input' />
                    </FormGroup>
                    <FormGroup>
					<Label htmlFor='comment'>what do you want to ask/tell us?</Label>
					<Field name='comment' as='textarea' rows='4' className='form-control'></Field>
					<ErrorMessage name='comment'>oops</ErrorMessage>
                    </FormGroup>
					<Button type='submit'>submit</Button>
				</Form>
			</Formik>
		</>
	);
};

export default ContactForm;
