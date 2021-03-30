import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import './Navbar.css';

const NavBar = () => {
	return (
		<div>
			<AppBar position='sticky' color=''>
				<nav className='navBar'>
					<h1>
						<Link to='/artists'>Home</Link>
					</h1>
					<h1>
						<Link className='link' to='/favorites'>
							Favorites
						</Link>
					</h1>
					<h1>
						<Link to='/artists'>SignIn</Link>
					</h1>
				</nav>
			</AppBar>
		</div>
	);
};

export default NavBar;
