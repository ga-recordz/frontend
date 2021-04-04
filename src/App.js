import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import ArtistDetail from './Components/ArtistDetail/ArtistDetail';
import Artist from './Components/Artist/Artist';
import Home from './Components/Home/Home';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import SignOutPage from './Components/SignOutPage/SignOutPage';
import SignIn from './Components/SignIn/SignIn';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	return (
		<div className='App1'>
			<div className='Main'>
				<Navbar token={token} user={user} />
				<Switch>
					<Route
						path='/artists/:id'
						render={(routerProps) => (
							<ArtistDetail match={routerProps.match} token={token} />
						)}
					/>
					<Route
						path='/userProfile'
						render={() => <UserProfile token={token} user={user} />}
					/>
					<Route path='/artists' render={() => <Artist />} />
					<Route
						path='/signup'
						render={() => (
							<SignUpPage
								user={user}
								setUser={setUser}
								setToken={setToken}
								token={token}
							/>
						)}
					/>
					<Route
						path='/signout'
						render={() => (
							<SignOutPage
								setUser={setUser}
								setToken={setToken}
								token={token}
								user={user}
							/>
						)}
					/>
					<Route
						path='/signin'
						render={() => (
							<SignIn
								setUser={setUser}
								setToken={setToken}
								token={token}
								user={user}
							/>
						)}
					/>
					<Route path='/' render={() => <Home />} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
