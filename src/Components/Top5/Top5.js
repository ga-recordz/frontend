import React from 'react';
import './Top5.css';

function Top5({ top5 }) {
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
