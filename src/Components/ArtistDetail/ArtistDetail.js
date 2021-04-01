import React from 'react';
import { useState, useEffect } from 'react';
import './ArtistDetail.css';
import DebateBox from '../DebateBox/DebateBox';
import DebateSection from '../DebateSection/DebateSection';

const ArtistDetail = ({ match }) => {
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
		<div>
			<h1>{artist.artist}</h1>
			<h1>{artist.bio}</h1>
			<DebateBox refreshDebates={refreshDebates} />
			<DebateSection debates={debates} refreshDebates={refreshDebates} />
		</div>
	);
};

export default ArtistDetail;
