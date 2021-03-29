import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Top5 from './Components/Top5/Top5';

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
			});
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Top5 top5={top5} />
			{artists.map((artist) => {
				return (
					<div key={artist.artist} className='artistCard'>
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
