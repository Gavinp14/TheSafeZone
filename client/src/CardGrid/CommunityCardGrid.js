import React from "react";
import CommunityCard from "../Card/CommunityCard";
import "./communitycardgrid.css";

function CommunityCardGrid() {
  return (
    <div className="container mt-5">
      <div className="card-grid">
        <CommunityCard title="Mental Health" messageCount="2" />
        <CommunityCard title="Sexual Abuse and Assault" messageCount="5" />
        <CommunityCard title="Domestic Violence" messageCount="3" />
        <CommunityCard title="Addiction" messageCount="7" />
        <CommunityCard title="Trauma and PTSD" messageCount="4" />
        <CommunityCard title="Suicide" messageCount="6" />
      </div>
    </div>
  );
}

export default CommunityCardGrid;
