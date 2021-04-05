import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import './Navbar.css';

const NavBar = ({ token, user }) => {
	return (
    <div>
      <AppBar position="sticky" color="default">
        <nav className="navBar">
          {/* <h1>
						<Link to='/'>Home</Link>
					</h1> */}
          <h1>
            {/* <Link to='/artists'>Artists</Link> */}
            <Link to="/">Artists</Link>
          </h1>
          {user ? (
            <h1>
              <Link to="/userProfile">{`${user.userName}'s Profile`}</Link>
            </h1>
          ) : null}

          <h1>
            {token ? (
              <Link to="/signout">Sign Out</Link>
            ) : (
              <Link to="/signup"> SignUp/Login </Link>
            )}
          </h1>
        </nav>
      </AppBar>
    </div>
  );
};

export default NavBar;
