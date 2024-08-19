import React from "react";
import "./reply.css"; // Ensure this file has custom styles if needed

function Reply({ id, username, text, date }) {
  return (
    <div className="reply-container position-relative p-3 border rounded bg-light mb-3">
      <p className="position-absolute top-0 start-0 m-2 text-primary">
        by {username}
      </p>
      <p className="mt-4 text-break">{text}</p>
    </div>
  );
}

export default Reply;
