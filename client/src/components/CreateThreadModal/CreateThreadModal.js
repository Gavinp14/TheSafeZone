import React, { useState } from "react";
import Modal from "react-modal";
import "./createthreadmodal.css";

Modal.setAppElement("#root"); // For accessibility

function CreateThreadModal({
  isOpen,
  onRequestClose,
  onAddThread,
  forumTitle,
}) {
  const [username, setUsername] = useState("Anonymous");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const formatDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are zero-based
    const day = today.getDate();
    const year = today.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newThread = {
      forumTitle,
      username,
      title,
      text,
      timestamp: formatDate(),
      replies: 0,
    };
    // Pass the new thread data to the parent
    onAddThread(newThread);
    setUsername("Anonymous");
    setTitle("");
    setText("");
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Thread Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Create a New Thread in {forumTitle}</h2>
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
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <textarea
            className="form-control"
            id="text"
            rows="20"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Create Thread
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

export default CreateThreadModal;
