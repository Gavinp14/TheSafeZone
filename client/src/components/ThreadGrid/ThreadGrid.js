import React, { useState } from "react";
import Thread from "../Thread/Thread";
import CreateThreadModal from "../CreateThreadModal/CreateThreadModal";
import "./threadgrid.css";

// Dummy data for threads and forum title
const dummyThreads = [
  {
    id: "1",
    username: "User1",
    title: "First Thread",
    text: "This is the first thread.",
    replies: [],
    timestamp: "2024-08-19",
  },
  {
    id: "2",
    username: "User2",
    title: "Second Thread",
    text: "This is the second thread.",
    replies: [],
    timestamp: "2024-08-20",
  },
  // Add more dummy threads as needed
];

const dummyForumTitle = "Sample Forum Title";

function ThreadGrid() {
  const [threads, setThreads] = useState(dummyThreads);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dummy function to simulate adding a new thread
  const handleAddThread = (newThread) => {
    try {
      // Simulate adding the new thread to local state
      setThreads((prevThreads) => [
        ...prevThreads,
        { id: (prevThreads.length + 1).toString(), ...newThread },
      ]);
    } catch (error) {
      setError(error);
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>{dummyForumTitle}</h1> {/* Display forum title */}
      <p>There are {threads.length} threads in this forum</p>
      <button
        type="button"
        className="btn btn-info text-white mt-2"
        onClick={openModal}
      >
        Create Thread
      </button>
      <div className="thread-grid mt-5">
        {threads.map((thread) => (
          <Thread
            key={thread.id}
            forum={dummyForumTitle}
            username={thread.username}
            title={thread.title}
            text={thread.text}
            replies={thread.replies}
            timestamp={thread.timestamp}
          />
        ))}
      </div>
      <CreateThreadModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onAddThread={handleAddThread}
        forumTitle={dummyForumTitle}
      />
    </>
  );
}

export default ThreadGrid;
