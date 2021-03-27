import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/artists')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setArtists(data);
				console.log(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='App'>
			{artists.map((artist) => {
				return (
					<div>
						<h1>{artist.artist}</h1>
						<p>{artist.bio}</p>
						<h2>{artist.likes.length}</h2>
					</div>
				);
			})}
		</div>
	);
}

export default App;
