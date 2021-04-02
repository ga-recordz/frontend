import React, { useState } from 'react';
import axios from 'axios';
import SignOutPage from '../SignOutPage/SignOutPage';

const SignUpPage = ({ user, setUser, token, setToken }) => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const changeUserName = (event) => {
		setUserName(event.target.value);
	};

	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	const signUpUser = (event) => {
		event.preventDefault();
		axios
			.post('https://goat-5-rappers.herokuapp.com/signup', {
				email: email,
				password: password,
				userName: userName,
			})
			.then((user) => {
				setUser(user.data);
				return user.data;
			})
			.then((user) => {
				axios
					.post('https://goat-5-rappers.herokuapp.com/signin', {
						email: user.email,
						password: password,
					})
					.then((res) => {
						setToken(res.data.token);
					});
			});
	};

	if (token) {
		return <SignOutPage />;
	} else {
		return (
			<div className='signInView'>
				<h1>Sign Up!</h1>
				<form>
					UserName:
					<br />
					<input
						type='text'
						name='userName'
						onChange={changeUserName}
						size='50'
					/>
					<br />
					E-mail:
					<br />
					<input type='text' name='email' onChange={changeEmail} />
					<br />
					Password:
					<br />
					<input type='text' name='password' onChange={changePassword} />
					<br />
					<button onClick={(event) => signUpUser(event)}>Sign Up!</button>
				</form>
			</div>
		);
	}
};

export default SignUpPage;
