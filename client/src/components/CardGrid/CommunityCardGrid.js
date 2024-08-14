import React, { useState } from "react";
import CommunityCard from "../Card/CommunityCard";
import "./communitycardgrid.css";

function CommunityCardGrid({ forums }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredForums = forums.filter((forum) =>
    forum.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a Topic"
        value={query}
        onChange={handleInputChange}
      ></input>
      <div className="card-grid mt-5 mb-5">
        {filteredForums.length > 0 ? (
          filteredForums.map((forum) => (
            <CommunityCard
              key={forum.id}
              id={forum.id}
              title={forum.title}
              postCount={forum.postCount}
            />
          ))
        ) : (
          <p>No topics found</p>
        )}
      </div>
    </div>
  );
}

export default CommunityCardGrid;
