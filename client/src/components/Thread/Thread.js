import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Reply from "../Reply/Reply";
import ReplyModal from "../ReplyModal/ReplyModal";
import { db, collection, doc, getDocs, addDoc } from "../../firebase";
import "./thread.css";

function Thread({ id, forum, username, title, text, replies, timestamp }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyData, setReplyData] = useState([]);

  // Fetch replies when the component mounts or when the thread ID changes
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const repliesSnapshot = await getDocs(
          collection(db, `forums/${forum}/threads/${id}/replies`)
        );
        const repliesData = repliesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReplyData(repliesData);
      } catch (error) {
        console.error("Error fetching replies: ", error);
      }
    };

    fetchReplies();
  }, [id, forum]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleAddReply = async (newReply, threadId) => {
    try {
      // Add the new reply to Firestore under the specific thread's replies collection
      await addDoc(
        collection(db, `forums/${forum}/threads/${threadId}/replies`),
        newReply
      );

      // Update local state to include the new reply
      setReplyData((prevData) => [...prevData, newReply]);

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding reply: ", error);
    }
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
        threadId={id}
      />
    </div>
  );
}

export default Thread;
