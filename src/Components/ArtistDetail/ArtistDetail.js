import React from 'react';
import { useState, useEffect } from 'react';
import './ArtistDetail.css';
import DebateBox from '../DebateBox/DebateBox';
import DebateSection from '../DebateSection/DebateSection';

const ArtistDetail = ({ match, token }) => {
	const [artist, setArtist] = useState([]);
	const [debates, setDebates] = useState([]);

	useEffect(() => {
		const id = match.params.id;

		fetch(`http://localhost:4000/artists/${id}`)
			.then((res) => res.json())
			.then((res) => {
				setArtist(res);
				setDebates(res.debates);
			});
	}, []);

	const refreshDebates = (newDebates) => {
		setDebates(newDebates);
	};

	if (!artist) {
		return <h1>...Loading</h1>;
	}

	return (
		<div className='details-container'>
			<img src={artist.image} alt={artist.id} />
			<h1>{artist.artist}</h1>
			<p>{artist.bio}</p>
			<h2>Albums</h2>
			<div className='albums'>
				{artist.album
					? artist.album.map((album) => {
							return (
								<div>
									<li>
										{album.albumName} <br /> Year Released:
										{album.yearReleased} <br /> Albums Sold: {album.albumSold}
									</li>
									<br />
								</div>
							);
					  })
					: null}
			</div>
			<h2>Awards</h2>
			<div>
				{artist.awards
					? artist.awards.map((awards) => {
							return (
								<div>
									Grammys: {awards.grammy} <br /> American Music Awards:
									{awards.americanMusicAwards} <br /> Rock and Roll Hall of
									Fame: {awards.RockandRollHallofFame}
								</div>
							);
					  })
					: null}
				<br />
			</div>
  			<DebateBox refreshDebates={refreshDebates} token={token} />
			<DebateSection
				debates={debates}
				refreshDebates={refreshDebates}
				artistID={match.params.id}
				token={token}
			/>
		</div>
	);
};

export default ArtistDetail;
