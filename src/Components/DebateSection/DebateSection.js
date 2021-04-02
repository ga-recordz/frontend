import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './DebateSection.css';

function DebateSection({ debates, refreshDebates, artistID, token }) {
	const [editedDebate, setEditedDebate] = useState('');
	const { id } = useParams();
	const [isEditing, setIsEditing] = useState(false);

	//------------------DELETE DEBATE-------------------------------------
	const deleteDebate = (debateID) => {
		axios
			.delete(`http://localhost:4000/artists/${artistID}/${debateID}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.then((res) => {
				refreshDebates(res.data.artist.debates);
			})
			.catch(console.error);
	};

	//-------------------END DELETE DEBATE-------------------------------------

	// const changeIsEditing = () => {
	// for changing the input box into the actual debate <p></p>
	// }

	const editDebate = (event) => {
		setEditedDebate(event.target.value);
	};

	const submitEditedDebate = (debateID) => {
		axios
			.patch(
				`http://localhost:4000/artists/${artistID}/${debateID}`,
				{
					debate: editedDebate,
				},
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				}
			)
			.then((res) => refreshDebates(res.data.artist.debates))
			.catch(console.error);
		setEditedDebate('');
	};

	return (
		<div className='debateSection'>
			{debates
				? debates.map((debate) => {
						return (
							<div key={`${debate._id}`}>
								<p>{debate.debate}</p>
								<button onClick={() => deleteDebate(debate._id)}>Delete</button>

								{/* {isEditing ? (
									<textarea> {debate.debate}</textarea>
								) : (
									<textarea></textarea>
								)} */}

								<textarea value={editedDebate} onChange={editDebate}></textarea>

								{/* <button>Edit</button> */}
								<button onClick={() => submitEditedDebate(debate._id)}>
									Submit Edit
								</button>
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default DebateSection;
