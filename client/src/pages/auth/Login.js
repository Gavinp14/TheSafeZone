import React from "react";
import LoginCard from "../../components/LoginCard/LoginCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <img
        src="safezonelogo.svg"
        alt="Safe Zone Logo"
        className="img-fluid"
        style={{ height: "350px", marginBottom: "-20px", marginTop: "-20px" }}
      />
      <LoginCard />
    </div>
  );
}

export default App;
