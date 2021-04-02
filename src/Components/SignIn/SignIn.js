import React, { useState } from 'react';
import axios from 'axios';

const SignIn = (setToken) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	//Create sign in functionality so users can sign in
	//  so somehow get the correct user object and the token when the user signs in
	const signInUser = () => {
		axios
			.post('http://localhost:4000/signin', {
				email: email,
				password: password,
			})
			.then((res) => {
				setToken(res.data.token);
			});
	};

	return (
		<div>
			<h1>Sign In</h1>
			<form>
				E-mail:
				<br />
				<input type='text' name='email' onChange={changeEmail} />
				<br />
				Password:
				<br />
				<input type='text' name='password' onChange={changePassword} />
				<br />
				<button onClick={(event) => signInUser(event)}>Sign In!</button>
			</form>
		</div>
	);
};

export default SignIn;
