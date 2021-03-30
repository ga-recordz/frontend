import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Artist() {
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
			<h1>Artists</h1>
			{artists.map((artist) => {
				return (
					<div key={artist.artist} className='artistCard'>
						<Link to={`/artists/${artist._id}`} key={artist._id}>
							<img src={artist.photo} alt={`${artist.artist}`} />
							<h3>{artist.artist}</h3>
							<div className='microphoneIcon'>
								<img
									src='https://img.icons8.com/emoji/48/000000/microphone-emoji.png'
									alt='microphone to like'
								/>
								<p>{artist.likes.length}</p>
								<p>{artist._id}</p>
								<p>hello</p>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Artist;
