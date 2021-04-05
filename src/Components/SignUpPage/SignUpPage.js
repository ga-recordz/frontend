import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignOutPage from '../SignOutPage/SignOutPage';
import "./SignUpPage.css"
import { GoogleLogin } from "react-google-login";

const SignUpPage = ({ user, setUser, token, setToken }) => {
	const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const responseGoogle = (response) => {
    setToken(response.accessToken);
	setPassword(response.googleId);
    axios
      .post("https://goat-5-rappers.herokuapp.com/signup", {
        email: response.profileObj.email,
        userName: response.profileObj.givenName,
        password: response.googleId,
        thirdPartyId: response.googleId,
      })
      .then((res) => {
        setUser(res.data);
        return res.data;
      })
      .then((user) => {
        axios
          .post(`https://goat-5-rappers.herokuapp.com/signin`, {
            email: response.profileObj.email,
            password: response.googleId,
          })
          .then((res) => {
            console.log(res);
            setToken(res.data.token);
          });
      });
  };


	const changeUserName = (event) => {
		setUserName(event.target.value);
	};

	const changeEmail = (event) => {
		setEmail(event.target.value);
	};

	const changePassword = (event) => {
		setPassword(event.target.value);
	};

	//sign up the user
	const signUpUser = (event) => {
		event.preventDefault();
		axios
      .post(`https://goat-5-rappers.herokuapp.com/signup`, {
        email: email,
        password: password,
        userName: userName,
      })
      .then((user) => {
        setUser(user.data);
        return user.data;
      }) //Sign in the user
      .then((user) => {
        axios
          .post(`https://goat-5-rappers.herokuapp.com/signin`, {
            email: user.email,
            password: password,
          })
          .then((res) => {
            setToken(res.data.token);
          });
      });
	};

	if (token) {
		return (
			<SignOutPage
				setUser={setUser}
				setToken={setToken}
				token={token}
				user={user}
			/>
		);
	} else {
		return (
      <div className="newForm">
        <h1>Sign Up!</h1>
        <form>
          <b>USERNAME:</b>
          <br />
          <input
            type="text"
            name="userName"
            placeholder="Name"
            onChange={changeUserName}
            // size='50'
          />
          <br />
          <b>EMAIL:</b>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={changeEmail}
          />
          <br />
          <b>PASSWORD:</b>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={changePassword}
          />
          <br />
          <br />
          <button className="myButton" onClick={(event) => signUpUser(event)}>
            Sign Up!
          </button>
          <div>
            <h1>Already apart of the Movement?</h1>{" "}
            <Link className="signIn" to="/signin">
              Login Here!
            </Link>
          </div>
        </form>
        <br/>
        <GoogleLogin
          clientId="184291515705-c3ggom9enl876ulgg8r07qqmnpto9uqr.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
	}
};

export default SignUpPage;
