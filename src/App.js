import './App.css';
import navBar from './components/navBar/navbar';
import { AppBar } from '@material-ui/core';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<navBar />
			<AppBar position='sticky' color=''>
				<nav className='navBar'>
					<h1>
						<Link to='/'>Home</Link>
					</h1>
					<h1>
						<Link className='link' to='/favorites'>
							favorites
						</Link>
					</h1>
					<h1>
						<Link to='/vote'> Vote </Link>
					</h1>
					<h1>
						<Link to='/artists'>Artists</Link>
					</h1>
				</nav>
			</AppBar>
			<h1>hello world</h1>
		</div>
	);
}

export default App;
