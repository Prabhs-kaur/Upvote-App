import React from "react";
import { useUpvote } from "../context/UpvoteContext";
import Upvote from "./Upvote";

const UpvoteList = ({ listName }) => {
  const { upvoteLists, toggleUpvote, addUpvote } = useUpvote();

  return (
    <div className="upvote-list">
      <h3>{listName}</h3>
      <button onClick={() => addUpvote(listName)}>+</button>

      <div className="upvotes">
        {upvoteLists[listName]?.map((selected, index) => (
          <Upvote key={index} selected={selected} onClick={() => toggleUpvote(listName, index)} />
        ))}
      </div>
    </div>
  );
};

export default UpvoteList;



