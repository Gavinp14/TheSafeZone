import React from "react";
import "./signupcard.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignupCard() {
  return (
    <div className="signup-card p-5 w-25 rounded shadow-lg bg-white">
      <h2 className="text-center mb-4">Create Account</h2>
      <div className="inputs d-flex flex-column gap-3 mb-4">
        <input className="form-control" type="email" placeholder="Enter Name" />
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
        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button className="btn btn-primary rounded-pill w-100 fs-5 mb-3">
        Sign Up
      </button>
      <div className="text-center">
        <p className="mb-0">
          Already have an account?{" "}
          <a href="/" className="text-primary text-decoration-none">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupCard;
