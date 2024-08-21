import React from "react";
import SignupCard from "../../components/SignupCard/SignupCard";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <img
        src="safezonelogo.svg"
        alt="Safe Zone Logo"
        className="img-fluid"
        style={{ height: "350px", marginBottom: "-20px", marginTop: "-20px" }}
      />
      <SignupCard />
    </div>
  );
}

export default Signup;
