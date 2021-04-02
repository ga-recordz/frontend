import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import ArtistDetail from './Components/ArtistDetail/ArtistDetail';
import Artist from './Components/Artist/Artist';
import Home from './Components/Home/Home';
import SignUpPage from './Components/SignUpPage/SignUpPage';
// import Dataform from "./Components/Dataform/Dataform"

function App() {
	return (
		<div className='App1'>
			<div className='Main'>
				<Navbar />
				<Switch>
					<Route
						path='/artists/:id'
						render={(routerProps) => <ArtistDetail match={routerProps.match} />}
					/>
					<Route path='/artists' render={() => <Artist />} />
					<Route path='/signup' render={() => <SignUpPage />} />
					<Route path='/' render={() => <Home />} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
