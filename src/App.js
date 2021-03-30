import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ArtistDetailPage from './Pages/ArtistDetailPage';
import HomePage from './Pages/HomePage';

function App() {
	const [artists, setArtists] = useState([]);
	const [top5, setTop5] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/artists')
			.then((res) => res.json())
			.then((data) => {
				//Set artists and set the top 5 artists
				let top = [];

				data.sort((a, b) => {
					return b.likes.length - a.likes.length;
				});

				for (let x = 0; x < 5; x++) {
					top.push(data[x]);
				}
				setTop5(top);
				let randomArtists = [];
				randomArtists.length = data.length;
				data.forEach((artist) => {
					randomArtists.splice(
						Math.floor(Math.floor(Math.random() * data.length)),
						0,
						artist
					);
				});
				setArtists(randomArtists);
				console.log(artists);
			});
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/artists'>
				<HomePage artists={artists} top5={top5} />
			</Route>
			<Route
				path='/artist/:artistName'
				render={() => <ArtistDetailPage artists={artists} />}
			/>
		</div>
	);
}

export default App;
