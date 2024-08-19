import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Reply from "../Reply/Reply";
import ReplyModal from "../ReplyModal/ReplyModal";
import "./thread.css";

const dummyData = [
  {
    id: "1",
    username: "JohnDoe123",
    text: "I totally agree with your point about mental health resources being underfunded.",
    date: "2024-08-17",
  },
  // Other dummy data...
];

function Thread({ id, forum, username, title, text, replies, timestamp }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyData, setReplyData] = useState(dummyData);

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
    setReplyData((prevData) => [...prevData, newReply]);
    setIsModalOpen(false);
  };

  return (
    <div
      className={`thread-card bg-light w-100 ${
        isDropdownOpen ? "expanded" : ""
      }`}
    >
      <div className="card-body d-flex flex-column position-relative p-3">
        <p className="forum position-absolute top-0 start-0 m-3">{forum}</p>
        <p className="card-username position-absolute top-0 end-0 m-3 text-primary">
          by {username}
        </p>
        <div className="content">
          <h5 className="card-title text-info mt-5">{title}</h5>
          <p className="card-text mt-3">{text}</p>
          <div
            className="replies-dropdown d-flex align-items-center"
            onClick={toggleDropdown}
          >
            <p className="card-replies mt-2 me-2">{replies} replies</p>
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
          {/* Move the button here and use the absolute positioning */}
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
        threadId={id}
      />
    </div>
  );
}

export default Thread;
