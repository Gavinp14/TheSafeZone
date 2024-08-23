import React from "react";
import Modal from "react-modal";
import "./deleteaccountmodal.css";

function DeleteAccountModal({ isOpen, onRequestClose, onDeleteAccount }) {
  return (
    <Modal
      isOpen={isOpen}
      isClosed={onRequestClose}
      contentLabel="Reply Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Are You Sure You Want to Delete Your Account?</h2>
      <div className="d-flex flex-row justify-content-center gap-2 mt-3">
        <button
          className="btn btn-success w-50 rounded-pill"
          onClick={onRequestClose}
        >
          Close
        </button>
        <button
          className="btn btn-danger w-50 rounded-pill"
          onClick={onDeleteAccount}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteAccountModal;
