import React from 'react';
import { Redirect } from 'react-router-dom';

const SignOutPage = ({ setUser, setToken, token }) => {
	const logOutUser = () => {
		setUser(null);
		setToken(null);
	};

	if (token) {
		return (
			<div>
				<h1>About That Time??</h1>
				<button onClick={logOutUser}>Sign Out</button>
			</div>
		);
	} else {
		return <Redirect to='/' />;
	}
};

export default SignOutPage;
