import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const DebateForm = ({ refreshDebates }) => {
	const [debate, setDebate] = useState('');
	const { id } = useParams();

	const changeDebate = (event) => {
		setDebate(event.target.value);
	};

	const submitDebate = (event) => {
		event.preventDefault();
		axios
			.put(`http://localhost:4000/artists/${id}`, {
				debate,
			})
			.then((res) => {
				refreshDebates(res.data.artist.debates);
			})
			.catch(console.error);
		setDebate('');
	};

	return (
		<form>
			<label for='debate'>Debate: </label>
			<textarea value={debate} onChange={changeDebate}></textarea>
			<button id='button' type='submit' onClick={submitDebate}>
				Submit Debate
			</button>
		</form>
	);
};

export default DebateForm;
