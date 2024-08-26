import React from "react";
import LoginCard from "../../components/LoginCard/LoginCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img
        src="safezonelogo.svg"
        alt="Safe Zone Logo"
        className="img-fluid"
        style={{
          height: "350px",
          marginBottom: "-40px",
          marginTop: "-50px",
        }}
      />
      <LoginCard />
    </div>
  );
}

export default App;
