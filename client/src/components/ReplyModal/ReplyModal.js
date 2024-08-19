import React, { useState } from "react";
import Modal from "react-modal";
import "./replymodal.css";

function ReplyModal({ isOpen, onRequestClose, onAddReply, threadId }) {
  const [username, setUsername] = useState("Anonymous");
  const [text, setText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReply = {
      id: Date.now(), // Generate a unique ID for the new reply
      threadId, // Pass the thread ID this reply is associated with
      username: username || "Anonymous",
      text,
      date: new Date().toISOString(), // Current date and time
    };
    // Pass the new reply data to the parent
    onAddReply(newReply);
    // Reset form fields
    setUsername("Anonymous");
    setText("");
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reply Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Reply to Thread</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Display Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Your Reply
          </label>
          <textarea
            className="form-control"
            id="text"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit Reply
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onRequestClose}
        >
          Close
        </button>
      </form>
    </Modal>
  );
}

export default ReplyModal;
