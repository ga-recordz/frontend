import React from "react";
import { useState } from "react";

const Dataform = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // post to database

  const changeComment = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const submitComment = () => {
    setComments([...comments, comment]);
    console.log(comments);
  };

  return (
    <div>
      <textarea value={comment} onChange={changeComment}></textarea>
      <button onClick={submitComment}>Submit comment</button>
    </div>
  );
};

export default Dataform;
