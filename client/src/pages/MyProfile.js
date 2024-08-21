// src/pages/MyProfile.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const dummyData = {
    name: "Gavin",
    email: "gavporter14@gmail.com",
    joined: "2/23/25",
    posts: 25,
  };

  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <button
        className="btn btn-info rounded-pill text-white mt-4"
        onClick={goBackToHome}
      >
        Back To Home
      </button>
      <div className="d-flex flex-column align-items-center mt-5">
        <div className="profile-container p-4 w-50 text-center border border-3 border-info rounded">
          <FontAwesomeIcon
            icon={faUser}
            className="edit-icon fs-1 text-primary mb-2"
          />
          <div className="profile-body">
            <h2 className="mb-4">My Profile</h2>
            <div className="info d-flex flex-column gap-3">
              <label>
                Name: <strong>{dummyData.name}</strong>
              </label>
              <label>
                Email: <strong>{dummyData.email}</strong>
              </label>
              <label>
                Joined: <strong>{dummyData.joined}</strong>
              </label>
              <label>
                Posts: <strong>{dummyData.posts}</strong>
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-danger mt-5 rounded-pill w-25">
          Delete Account
        </button>
      </div>
    </>
  );
}

export default MyProfile;
