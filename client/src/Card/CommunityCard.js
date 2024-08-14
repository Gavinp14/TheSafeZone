import React from "react";
import "./communitycard.css";

function CommunityCard({ title, messageCount }) {
  return (
    <div className="card bg-info text-white mb-4">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title position-relative">{title}</h5>
        <p className="card-text text-center mb-2">{messageCount} posts</p>
      </div>
    </div>
  );
}

export default CommunityCard;
