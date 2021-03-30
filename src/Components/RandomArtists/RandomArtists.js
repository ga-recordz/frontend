import React from 'react';
import { Link } from 'react-router-dom';
import './RandomArtists.css';

const RandomArtists = ({ artists }) => {
	return (
		<div>
			<h2 className='randomArtistsHeader'>Artists</h2>
			<section className='randomArtists'>
				{artists.map((artist) => {
					return (
						<Link to={`/artist/${artist._id}`}>
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
						</Link>
					);
				})}
			</section>
		</div>
	);
};

export default RandomArtists;
