// src/components/CardGrid/CommunityCardGrid.js
import React, { useState, useEffect } from "react";
import CommunityCard from "../Card/CommunityCard";
import { db, collection, getDocs } from "../../firebase";
import "./communitycardgrid.css";

function CommunityCardGrid() {
  const [forums, setForums] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch forums from Firestore
  useEffect(() => {
    const fetchForums = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "forums"));
        const forumsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setForums(forumsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchForums();
  }, []);

  // Filter forums based on search query
  const filteredForums = forums.filter((forum) =>
    forum.title.toLowerCase().includes(query.toLowerCase())
  );

  // Handle input changes for search
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="d-flex justify-content-center gap-3">
        <input
          className="search-bar w-25"
          type="text"
          placeholder="Search for a Forum"
          value={query}
          onChange={handleInputChange}
        />
        <button className="btn btn-success text-white">Create Forum</button>
      </div>
      <div className="card-grid mt-5 mb-5">
        {filteredForums.length > 0 ? (
          filteredForums.map((forum) => (
            <CommunityCard
              key={forum.id}
              id={forum.id}
              title={forum.title}
              postCount={forum.postCount}
            />
          ))
        ) : (
          <p>No topics found</p>
        )}
      </div>
    </div>
  );
}

export default CommunityCardGrid;
