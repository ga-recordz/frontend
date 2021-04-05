import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "./SignIn.css";
import { GoogleLogin } from "react-google-login";

const SignIn = ({ setToken, setUser, token, user }) => {
  const responseGoogle = (response) => {
    fetch(
      `https://goat-5-rappers.herokuapp.com/thirdPartyUser/${response.googleId}`
    )
      .then((res) => res.json())
      .then((res) =>
        axios.post("https://goat-5-rappers.herokuapp.com/signin", {
          email: res.email,
          password: res.thirdPartyId,
        })
      )
      .then((userData) => {
        setToken(userData.data.token);
        setUser(userData.data.user);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      .post(`https://goat-5-rappers.herokuapp.com/signin`, {
        email: email,
        password: password,
      })
      .then((tokenData) => {
        setToken(tokenData.data.token);

        //Get USER
        fetch(`https://goat-5-rappers.herokuapp.com/${tokenData.data.user._id}`)
          .then((res) => res.json())
          .then((user) => {
            setUser(user);
          });
      });
  };

  if (token) {
    return <Redirect to="/userProfile" token={token} user={user} />;
  } else {
    return (
      <div className="login">
        <h1>Sign In</h1>
        <form>
          <b>
          E-mail:
          </b>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={changeEmail}
          />
          <br />
          <b>
          Password:
          </b>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={changePassword}
          />
          <br />
          <button onClick={(event) => signInUser(event)}>Sign In!</button>
        </form>
        <br />
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

export default SignIn;
