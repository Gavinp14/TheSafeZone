import React from "react";
import SignupCard from "../../components/SignupCard/SignupCard";

function Signup() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img
        src="safezonelogo.svg"
        alt="Safe Zone Logo"
        className="img-fluid"
        style={{ height: "350px", marginBottom: "-30px", marginTop: "-50px" }}
      />
      <SignupCard />
    </div>
  );
}

export default Signup;
