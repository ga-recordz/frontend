import React from 'react';
import './DebateSection.css';

function DebateSection({ debates }) {
	return (
		<div className='debateSection'>
			{debates
				? debates.map((debate) => {
						return <p>{debate}</p>;
				  })
				: null}
		</div>
	);
}

export default DebateSection;
