import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const redirect = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("please fill all fields");
    } else {
      redirect("/");
    }
  };

  return (
    <div className="signinform d-flex justify-content-center align-items-center">
      <form
        className="bg-white rounded-3 text-dark mx-auto p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="fw-700 fs-28px ps-4 ">Get Started</h1>
        <p className="ps-4 fw-400 fs-16px mb-5">
          Let's get started by filling out the information below
        </p>
        <div className="d-flex gap-3 mb-3">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control "
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="text-danger">{error}</p>
        <div className="form-check my-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            I agree to{" "}
            <span style={{ color: "#8d34ff" }}>Terms of Services</span> and{" "}
            <span style={{ color: "#8d34ff" }}>Privacy Policies</span>
          </label>
        </div>

        <div className="d-flex flex-column">
          <button
            className="btn w-100 text-white"
            style={{ backgroundColor: " #8d34ff", height: "50px" }}
          >
            Sign Up
          </button>
          <hr />
          <button
            className="btn border border-1 border-dark rounded-3 mb-4"
            style={{ backgroundColor: " white", height: "50px" }}
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
            Continue with Google
          </button>
          <p className="mx-auto">
            Already have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none"
              style={{ color: "#8d34ff" }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
