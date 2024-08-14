import React, { useState } from "react";
import Thread from "../Thread/Thread";
import "./threadgrid.css";

function ThreadGrid() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //const filteredForums = forums.filter((forum) =>
  //forum.title.toLowerCase().includes(query.toLowerCase())
  //);

  //replace above with specific case for searching through a forum

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a Topic"
        value={query}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default ThreadGrid;
