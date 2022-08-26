import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function SignUp() {
  const [password, setPassword] = useState("password");

  return (
    <div className="auth">
      <div className="container">
        <h1>JOIN NOW TO Explore</h1>
        <form>
          <div className="form-control">
            <input type="text" required />
            <label htmlFor="input">Email</label>
          </div>
          <div className="form-control">
            <input className="password" type={password} required />
            <label htmlFor="password">Password</label>
            <img
              src="/img/btn/eye-regular.svg"
              alt="Show password"
              onMouseEnter={() => setPassword("text")}
              onMouseLeave={() => setPassword("password")}
            />
          </div>
          <div className="form-control">
            <input className="password" type={password} required />
            <label htmlFor="password"> Renter Password</label>
            <img
              src="/img/btn/eye-regular.svg"
              alt="Show password"
              onMouseEnter={() => setPassword("text")}
              onMouseLeave={() => setPassword("password")}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
          <p className="text">
            Already Have an account ? <Link to="/login">LOGIN NOW</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
