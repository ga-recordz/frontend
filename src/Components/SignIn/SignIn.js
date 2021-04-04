import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const SignIn = ({ setToken, setUser, token }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userID, setUserID] = useState('');
	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	//Create sign in functionality so users can sign in
	//  so somehow get the correct user object and the token when the user signs in
	const signInUser = (event) => {
		event.preventDefault();
		axios
			.post(`http://localhost:4000/signin`, {
				email: email,
				password: password,
			})
			.then((tokenData) => {
				setToken(tokenData.data.token);
				// console.log(tokenData.data.token);
				setUser(tokenData.data.user._id);
				console.log(tokenData.data.user._id);

				//Get USER
				fetch(`http://localhost:4000/user/${tokenData.data.user._id}`)
					.then((res) => res.json())
					.then((user) => {
						console.log(user);
					});

				// axios
				// 	.get('http://localhost:4000/user', {
				// 		data: { userID: tokenData.data.user._id },
				// 	})
				// 	.then((res) => {
				// 		setUser(res.data);
				// 		console.log(res.data);
				// 	})
				// 	.catch(console.error);
			});
	};

	if (token) {
		return <Redirect to='/' />;
	} else {
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
	}
};

export default SignIn;
