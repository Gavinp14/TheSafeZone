import React from "react";
import { useParams } from "react-router-dom";
import ThreadGrid from "../components/ThreadGrid/ThreadGrid";

function Forum() {
  const { forumId } = useParams(); // Get forumId from URL

  return (
    <div className="mt-3">
      <ThreadGrid forumId={forumId} />
    </div>
  );
}

export default Forum;
