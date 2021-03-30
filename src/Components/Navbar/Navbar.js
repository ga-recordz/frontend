import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <AppBar position="sticky" color="">
        <nav className="navBar">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link className="link" to="/favorites">
              favorites
            </Link>
          </h1>
          <h1>
            <Link to="/vote"> Vote </Link>
          </h1>
          <h1>
            <Link to="/artists">Artists</Link>
          </h1>
        </nav>
      </AppBar>
    </div>
  );
};

export default NavBar;
