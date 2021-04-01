import React from 'react';
import './DebateSection.css';

function DebateSection({ debates }) {
	return (
		<div className='debateSection'>
			{debates
				? debates.map((debate) => {
						return (
							<div key={`${debate}`}>
								<p>{debate}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default DebateSection;
