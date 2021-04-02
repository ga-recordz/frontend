import React, { useState, useEffect } from 'react';
import './Top5.css';

function Top5() {
	const [artists, setArtists] = useState([]);
	const [top5, setTop5] = useState([]);

	useEffect(() => {
		fetch('https://goat-5-rappers.herokuapp.com/artists')
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
	let rank = 1;

	return (
		<>
			<h1 className='top5'>Top 5</h1>
			<div className='allTop5'>
				{top5 ? (
					top5.map((artist) => {
						return (
							<div className='top5Artist' key={artist.artist}>
								<h2>{`${rank++}.)`}</h2>
								<h3>{artist.artist}</h3>
								<div>{artist.likes.length}</div>
							</div>
						);
					})
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</>
	);
}

export default Top5;
