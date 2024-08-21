import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goToProfilePage = () => {
    navigate("/profile");
  };
  return (
    <header className="text-center">
      <FontAwesomeIcon
        icon={faUser}
        className="user-icon  fs-1 position-absolute top-0 end-0 m-5"
        onClick={goToProfilePage}
      />
      <div>
        <img
          src="/safezonelogo.svg"
          alt="Safe Zone Logo"
          className="img-fluid"
          style={{ height: "350px", marginBottom: "-20px", marginTop: "-20px" }}
        />
        <p className="mt-3">
          Click on a topic to read about others' stories, advice, and support or
          share your own.
        </p>
      </div>
    </header>
  );
}

export default Header;
