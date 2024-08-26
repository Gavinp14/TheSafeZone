import React, { useState } from "react";
import Modal from "react-modal";
import "./createforummodal.css";

function CreateForumModal({ isOpen, onRequestClose, onCreateForum }) {
  const [forumName, setForumName] = useState("");
  const [forumDescription, setForumDescription] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reply Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="mb-3">Create A Forum</h2>
      <form onSubmit={null}>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Forum Name"
            id="forumname"
            value={forumName}
            onChange={(e) => setForumName(e.target.value)}
          />
          <textarea
            className="form-control"
            id="forumDescription"
            placeholder="Enter Forum Description"
            maxLength={400}
            rows="10"
            value={forumDescription}
            onChange={(e) => setForumDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-3"></button>
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

export default CreateForumModal;
