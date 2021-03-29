import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"

function App() {
	const [artists, setArtists] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/artists')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setArtists(data);
			});
	}, []);

	return (
		<div className='App'>
			<Navbar/>
			<nav>
				<h3>Favorites</h3>
				<h3>Home</h3>
				<h3>SignIn</h3>
			</nav>
			<h1>Artists</h1>
			{artists.map((artist) => {
				return (
					<div key={artist.artist} className='artistCard'>
						<img src={artist.photo} alt={`${artist.artist}`} />
						<h3>{artist.artist}</h3>
						<div className='microphoneIcon'>
							<img
								src='https://img.icons8.com/emoji/48/000000/microphone-emoji.png'
								alt='microphone to like'
							/>
							<p>{artist.likes.length}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
