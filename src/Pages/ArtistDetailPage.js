import React from 'react';
import { useParams } from 'react-router-dom';

function ArtistDetailPage({ artists }) {
	let { artistName } = useParams();

	return <div>{artistName}</div>;
}

export default ArtistDetailPage;
