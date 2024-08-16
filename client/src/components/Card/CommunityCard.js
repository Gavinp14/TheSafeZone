import React from "react";
import { useNavigate } from "react-router-dom";
import "./communitycard.css";

function CommunityCard({ id, title, postCount }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/forums/${id}`);
  };

  return (
    <div className="card bg-info text-white" onClick={handleClick}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title position-relative">{title}</h5>
        <p className="card-text text-center mb-2">{postCount} threads</p>
      </div>
    </div>
  );
}

export default CommunityCard;
