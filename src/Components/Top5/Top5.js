import React from 'react';
import './Top5.css';

function Top5({ top5 }) {
	console.log(top5);
	return (
		<>
			<h1>Top 5</h1>
			<div>
				{top5 ? (
					top5.map((artist) => {
						return (
							<div className='top5Artist' key={artist.artist}>
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
