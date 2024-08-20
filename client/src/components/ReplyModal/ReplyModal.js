import React, { useState } from "react";
import Modal from "react-modal";
import "./replymodal.css";

Modal.setAppElement("#root"); // For accessibility

function ReplyModal({ isOpen, onRequestClose, onAddReply, threadId }) {
  const [username, setUsername] = useState("Anonymous");
  const [text, setText] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReply = {
      username: username || "Anonymous",
      text,
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };

    try {
      // Pass the new reply data to the parent
      await onAddReply(newReply, threadId);
      // Reset form fields
      setUsername("Anonymous");
      setText("");
      onRequestClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding reply: ", error);
    }
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
