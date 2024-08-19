import React, { useState } from "react";
import Thread from "../Thread/Thread";
import CreateThreadModal from "../CreateThreadModal/CreateThreadModal";
import "./threadgrid.css";

const threadData = [
  {
    id: 1,
    forum: "Support and Recovery",
    username: "hopefulHealer92",
    title: "Seeking Help After Leaving an Abusive Relationship",
    text: "I recently left an abusive relationship and I feel lost. I don't know where to start or how to heal. Any advice would be appreciated.",
    timestamp: "2024-08-15",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 2,
    forum: "Trauma and Healing",
    username: "braveSoul78",
    title: "Struggling with Nightmares and Flashbacks",
    text: "I've been having nightmares and flashbacks since my assault. It's been really hard to cope, and I'm not sure how to deal with these feelings. Has anyone else experienced this?",
    timestamp: "2024-08-16",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 3,
    forum: "Mental Health Matters",
    username: "anxiousMind",
    title: "Feeling Overwhelmed by Anxiety",
    text: "Lately, my anxiety has been out of control. I can't seem to relax or stop worrying about everything. Does anyone have tips for managing anxiety?",
    timestamp: "2024-08-17",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 4,
    forum: "Self-Care and Recovery",
    username: "strugglingButStrong",
    title: "Support Needed: Recovering from Self-Harm",
    text: "I've been struggling with self-harm for a while, and I'm trying to stop. It's really tough, and I feel like I'm fighting against myself. How do you find the strength to keep going?",
    timestamp: "2024-08-14",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 5,
    forum: "Work-Life Balance",
    username: "overworkedWonder",
    title: "Coping with Stress at Work",
    text: "Work has been overwhelming lately, and it's taking a toll on my mental health. I feel like I'm constantly under pressure and can't seem to find balance. How do you manage stress at work?",
    timestamp: "2024-08-14",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 6,
    forum: "Grief and Loss",
    username: "grievingHeart",
    title: "Dealing with Grief After a Loss",
    text: "I recently lost a loved one, and the grief has been unbearable. I'm not sure how to move forward. How do you cope with the pain of losing someone?",
    timestamp: "2024-08-14",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 7,
    forum: "Social Anxiety Support",
    username: "sociallyStruggling",
    title: "Overcoming Social Anxiety",
    text: "Social situations make me extremely anxious, and I've been avoiding them altogether. I want to be more social, but it's so hard. How do you overcome social anxiety?",
    timestamp: "2024-08-14",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 8,
    forum: "Childhood Trauma",
    username: "healingJourney",
    title: "Recovering from Childhood Trauma",
    text: "My childhood was full of traumatic experiences, and it's affecting my life as an adult. I'm trying to heal, but it's a long process. Has anyone else gone through this?",
    timestamp: "2024-08-18",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 9,
    forum: "Depression and Hope",
    username: "lostButTrying",
    title: "Struggling with Depression",
    text: "I've been dealing with depression for years, and it's been hard to stay positive. I would appreciate any advice or words of encouragement.",
    timestamp: "2024-08-19",
    replies: Math.floor(Math.random() * 6) + 1,
  },
  {
    id: 10,
    forum: "PTSD Support",
    username: "resilientWarrior",
    title: "Managing PTSD Symptoms",
    text: "PTSD has been a constant struggle for me, and I'm looking for ways to manage the symptoms. What strategies have helped you cope with PTSD?",
    timestamp: "2024-08-20",
    replies: Math.floor(Math.random() * 6) + 1,
  },
];

function ThreadGrid() {
  // State to manage modal visibility
  const [threads, setThreads] = useState(threadData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddThread = (newThread) => {
    setThreads((prevThreads) => [...prevThreads, newThread]);
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p>There are {threadData.length} threads in this forum</p>

      <button
        type="button"
        className="btn btn-info text-white mt-2"
        onClick={openModal}
        onAddThread={handleAddThread}
      >
        Create Thread
      </button>

      <div className="thread-grid mt-5">
        {threads.map((thread) => (
          <Thread
            key={thread.id}
            forum={thread.forum}
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
      />
    </>
  );
}

export default ThreadGrid;
