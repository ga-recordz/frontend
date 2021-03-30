import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArtistDetail.css';

const ArtistDetail = ({ match }) => {
	const [details, setDetails] = useState([]);
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
				console.log('hee');
				setDetails(res);
			});
	}, []);

	if (!details) {
		return <h1>...Loading</h1>;
	}

	return (
		<div>
			{/* <h1>hello world</h1> */}
			<h1>{details.artist}</h1>
			<h1>{details.bio}</h1>
		</div>
	);
};

export default ArtistDetail;
