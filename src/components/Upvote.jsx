import React from "react";
import "../styles.css"; 

const Upvote = ({ selected, onClick }) => (
  <button className={`upvote ${selected ? "selected" : "default"}`} onClick={onClick}>
    ↑
  </button>
);

export default Upvote;