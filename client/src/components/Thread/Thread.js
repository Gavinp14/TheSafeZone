import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Reply from "../Reply/Reply";
import ReplyModal from "../ReplyModal/ReplyModal";
import "./thread.css";

function Thread({ id, forum, username, title, text, replies, timestamp }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyData, setReplyData] = useState([
    { id: "1", username: "User1", text: "This is a reply", date: "2024-08-19" },
    {
      id: "2",
      username: "User2",
      text: "This is another reply",
      date: "2024-08-20",
    },
    // Add more dummy replies as needed
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleAddReply = (newReply) => {
    // Add the new reply to local state
    setReplyData((prevData) => [
      ...prevData,
      { id: Date.now().toString(), ...newReply },
    ]);

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div
      className={`thread-card bg-light w-100 ${
        isDropdownOpen ? "expanded" : ""
      }`}
    >
      <div className="card-body d-flex flex-column position-relative p-3">
        <p className="forum position-absolute top-0 start-0 m-3 fw-bold">
          {forum}
        </p>
        <p className="card-username position-absolute top-3 start-0 m-3 mt-4 text-primary">
          by {username}
        </p>
        <div className="user-actions d-flex gap-3 ms-auto">
          <FontAwesomeIcon icon={faEdit} className="edit-icon fs-4" />
          <FontAwesomeIcon
            icon={faTrash}
            className="trash-icon text-danger fs-4"
          />
        </div>
        <div className="content">
          <h5 className="card-title text-info mt-5">{title}</h5>
          <p className="card-text mt-3 text-break">{text}</p>
          <div
            className="replies-dropdown d-flex align-items-center"
            onClick={toggleDropdown}
          >
            <p className="card-replies mt-2 me-2">{replyData.length} replies</p>
            <FontAwesomeIcon
              icon={isDropdownOpen ? faChevronUp : faChevronDown}
              className="dropdown-icon"
            />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content mt-2">
              {replyData.map((reply) => (
                <Reply
                  key={reply.id}
                  username={reply.username}
                  text={reply.text}
                  date={reply.date}
                />
              ))}
            </div>
          )}
          <button className="reply-button btn text-info" onClick={openModal}>
            Reply
          </button>
        </div>
      </div>

      {/* Reply Modal */}
      <ReplyModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onAddReply={handleAddReply}
      />
    </div>
  );
}

export default Thread;
