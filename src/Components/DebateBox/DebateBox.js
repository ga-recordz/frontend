import React from 'react';
import { useState } from 'react';

const DebateForm = ({ debates }) => {
	const [debate, setDebate] = useState('');

	const changeDebate = (event) => {
		setDebate(event.target.value);
		console.log(debate);
	};

	const submitDebate = () => {
		//add debate to artist in the data base
		setDebate('');
	};

	return (
		<div>
			<textarea value={debate} onChange={changeDebate}></textarea>
			<button onClick={submitDebate}>Submit Debate</button>
		</div>
	);
};

export default DebateForm;
