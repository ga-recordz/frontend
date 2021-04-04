import React from 'react';
import { Redirect } from 'react-router-dom';

const SignOutPage = ({ setUser, setToken, token, user }) => {
	const logOutUser = (event) => {
		event.preventDefault();
		setUser(null);
		setToken(null);
	};

	if (token) {
		return (
			<div>
				<h1>About That Time??</h1>
				<button onClick={(event) => logOutUser(event)}>Sign Out</button>
			</div>
		);
	} else {
		return <Redirect to='/' />;
	}
};

export default SignOutPage;
