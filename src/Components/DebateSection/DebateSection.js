import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./DebateSection.css";

function DebateSection({ debates, refreshDebates, artistID, token }) {
  const [editedDebate, setEditedDebate] = useState("");
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDebate, setSelectedDebate] = useState(debates);

  useEffect(() => {
    setSelectedDebate(debates);
  }, [debates]);

  //------------------DELETE DEBATE-------------------------------------
  const deleteDebate = (debateID) => {
    axios
      .delete(`https://goat-5-rappers.herokuapp.com/${artistID}/${debateID}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        refreshDebates(res.data.debates);
      })
      .catch(console.error);
  };

  //-------------------END DELETE DEBATE-------------------------------------

  const changeIsEditing = (event, debate, index) => {
    let ds = [...debates];
    let selctedD = Object.entries(debate);
    selctedD.push(["isSelected", true]);
    const newD = Object.fromEntries(selctedD);
    ds.splice(index, 1, newD);
    setSelectedDebate(ds);
  };

  const editDebate = (event, debate) => {
    setEditedDebate(event.target.value);
  };

  const submitEditedDebate = (debateID) => {
    axios
      .patch(
        `https://goat-5-rappers.herokuapp.com/${artistID}/${debateID}`,
        {
          debate: editedDebate,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => refreshDebates(res.data.artist.debates))
      .catch(console.error);
    setEditedDebate("");
  };

  return (
    <div className="debateSection">
      {selectedDebate
        ? selectedDebate.map((debate, index) => {
            return (
              <div
                className={debate._id}
                key={`${debate._id}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {debate.isSelected ? (
                  <>
                    <textarea
                      id={debate._id}
                      defaultValue={debate.debate}
                      onChange={(event) => editDebate(event, debate._id)}
                    ></textarea>
                    <div>
                      <button onClick={() => deleteDebate(debate._id)}>
                        Delete
                      </button>

                      <button onClick={() => submitEditedDebate(debate._id)}>
                        Submit Edit
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>{debate.debate}</p>
                    <button
                      className={debate._id}
                      onClick={(event) => {
                        changeIsEditing(event, debate, index);
                      }}
                    >
                      Edit Debate
                    </button>
                  </>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default DebateSection;
