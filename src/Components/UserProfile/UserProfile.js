import React from 'react';

const UserProfile = ({ token, user }) => {
	if (user) {
		return <div>Welcome to the Great Debate! {user.userName}.</div>;
	} else {
		return <h1>Loading...</h1>;
	}
};

export default UserProfile;
