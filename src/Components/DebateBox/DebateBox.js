import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import APIurl from "../../config.js"

const DebateForm = ({ refreshDebates, token }) => {
  const [debate, setDebate] = useState("");
  const { id } = useParams();

  const changeDebate = (event) => {
    setDebate(event.target.value);
  };

  const submitDebate = (event) => {
    event.preventDefault();
    axios
      .post(
        `${APIurl}/artists/${id}`,
        {
          debate: debate,
          artistID: id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        refreshDebates(res.data.artist.debates);
      })
      .catch(console.error);
    setDebate("");
  };

  return (
    <form>
      <label for="debate">Debate: </label>
      <textarea value={debate} onChange={changeDebate}></textarea>
      <button id="button" type="submit" onClick={submitDebate}>
        Submit Debate
      </button>
    </form>
  );
};

export default DebateForm;
