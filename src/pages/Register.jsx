import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const redirect = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("please fill all fields");
      
    } else{
      redirect ("/")
    }
  };

  return (
    <div className="register-form d-flex justify-content-center align-items-center">
      <form
        className="bg-white rounded-3 text-dark mx-auto p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="fw-700 fs-28px ps-4 ">Welcome Back</h1>
        <p className="ps-4 fw-400 fs-16px mb-5">
          Fill your information to access your account.
        </p>

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
        <p className="text-danger">{error}</p>
        <div className="form-check my-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="checkbox" className="form-check-label ms-2">
            Remember me
          </label>
        </div>

        <div className="d-flex flex-column">
          <button
            className="btn w-100 text-white"
            style={{ backgroundColor: " #8d34ff", height: "50px" }}
          >
            Sign In
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
            Don't have an account?{" "}
            <Link
              to="/signIn"
              className="text-decoration-none"
              style={{ color: "#8d34ff" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
