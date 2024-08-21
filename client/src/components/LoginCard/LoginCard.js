import React from "react";
import "./logincard.css";

function LoginCard() {
  return (
    <div className="login-card p-5 rounded shadow-lg bg-white">
      <h2 className="text-center mb-4">Log in</h2>
      <div className="inputs d-flex flex-column gap-3 mb-4">
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
        />
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <button className="btn btn-primary rounded-pill w-100 fs-5 mb-3">
        Log In
      </button>
      <div className="text-center">
        <p className="mb-0">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary text-decoration-none">
            Create An Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
