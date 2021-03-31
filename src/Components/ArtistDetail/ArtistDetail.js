import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArtistDetail.css';
import DebateBox from '../DebateBox/DebateBox';
import DebateSection from '../DebateSection/DebateSection';

const ArtistDetail = ({ match }) => {
	const [details, setDetails] = useState([]);
	const [debates, setDebates] = useState([]);
	let { artistName } = useParams();
	//   const URL = `http://localhost:4000/artists/${match.params.id}`;

	useEffect(() => {
		const id = match.params.id;
		console.log(id);
		console.log(artistName);
		fetch(`http://localhost:4000/artists/${id}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setDetails(res);
				setDebates(res.debates);
			});
	}, []);

	if (!details) {
		return <h1>...Loading</h1>;
	}

	return (
		<div>
			<h1>{details.artist}</h1>
			<h1>{details.bio}</h1>
			<DebateBox debates={details.debates} addDebate={setDebates} />
			<DebateSection debates={details.debates} />
		</div>
	);
};

export default ArtistDetail;
