import React, { useState, useEffect } from "react";
import Thread from "../Thread/Thread";
import CreateThreadModal from "../CreateThreadModal/CreateThreadModal";
import { db, collection, doc, getDoc, addDoc, getDocs } from "../../firebase";
import "./threadgrid.css";

function ThreadGrid({ forumId }) {
  const [threads, setThreads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [forumTitle, setForumTitle] = useState("");

  // Fetch threads and forum title from Firestore when the component mounts or forumId changes
  useEffect(() => {
    const fetchThreadsAndTitle = async () => {
      setLoading(true);
      try {
        // Fetch threads
        const threadsSnapshot = await getDocs(
          collection(db, `forums/${forumId}/threads`)
        );
        const threadsData = threadsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setThreads(threadsData);

        // Fetch forum title
        const forumDocRef = doc(db, "forums", forumId);
        const forumDoc = await getDoc(forumDocRef);
        if (forumDoc.exists()) {
          setForumTitle(forumDoc.data().title);
        } else {
          console.error("No such forum document!");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (forumId) {
      fetchThreadsAndTitle();
    }
  }, [forumId]);

  // Handle adding a new thread
  const handleAddThread = async (newThread) => {
    try {
      // Add the new thread document to Firestore
      const threadRef = await addDoc(
        collection(db, `forums/${forumId}/threads`),
        newThread
      );

      // Create an empty 'replies' subcollection for this thread
      await addDoc(
        collection(db, `forums/${forumId}/threads/${threadRef.id}/replies`),
        {}
      );

      // Update the local state to include the new thread
      setThreads((prevThreads) => [
        ...prevThreads,
        { id: threadRef.id, ...newThread }, // Use the Firestore-generated ID
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
      <h1>{forumTitle}</h1> {/* Display forum title */}
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
            forum={forumTitle}
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
        forumTitle={forumTitle}
      />
    </>
  );
}

export default ThreadGrid;
