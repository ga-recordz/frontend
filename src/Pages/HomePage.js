import React from 'react';
import Top5 from '../Components/Top5/Top5';
import RandomArtists from '../Components/RandomArtists/RandomArtists';

const HomePage = ({ artists, top5 }) => {
	return (
		<div>
			<Top5 top5={top5} />
			<RandomArtists artists={artists} />
		</div>
	);
};

export default HomePage;
