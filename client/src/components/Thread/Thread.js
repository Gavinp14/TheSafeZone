import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./thread.css";

function Thread({ id, forum, username, title, text, timestamp, replies }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`thread-card bg-light w-100 ${
        isDropdownOpen ? "expanded" : ""
      }`}
    >
      <div className="card-body d-flex flex-column position-relative p-3">
        <p className="forum position-absolute top-0 start-0 m-3">{forum}</p>
        <p className="card-username position-absolute top-0 end-0 m-3">
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
            <button className="btn btn-light text-info position-absolute bottom-o end-0 m-3">
              Reply
            </button>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content mt-2">
              <p>Hello</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Thread;
