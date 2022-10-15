import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
	Modal,
	ModalHeader,
	ModalBody,
	FormGroup,
	Label,
	Button,
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const UserLoginForm = () => {
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	const handleLogin = (values) => {
		const currentUser = {
			username: values.username,
			password: values.password,
		};
		dispatch(setCurrentUser(currentUser));
		setLoginModalOpen(false);
		console.log(currentUser);
	};

	return (
		<>
			<span>
				{currentUser ? (
					<div>
						<p>you logged in! hurrah welcome</p>
					</div>
				) : (
					<div>
						<Button onClick={() => setLoginModalOpen(true)}>login</Button>
					</div>
				)}
			</span>
			<Modal isOpen={loginModalOpen}>
				<ModalHeader toggle={() => setLoginModalOpen(false)}>login</ModalHeader>

				<ModalBody>
					<Formik
						initialValues={{
							username: '',
							password: '',
						}}
						onSubmit={handleLogin}
					>
						<Form>
							<FormGroup>
								<Label htmlFor='username'>username</Label>
								<Field
									id='username'
									name='username'
									placeholder='username'
									className='form-control'
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='password'>password</Label>
								<Field
									id='password'
									name='password'
									placeholder='password'
									className='form-control'
								/>
							</FormGroup>
							<Button type='submit'>login</Button>
						</Form>
					</Formik>
				</ModalBody>
			</Modal>
		</>
	);
};

export default UserLoginForm;
