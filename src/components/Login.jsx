import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [password, setPassword] = useState("password");

  return (
    <div className="auth">
      <div className="container">
        <h1>LOGIN TO CONTINUE</h1>
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
          <button className="btn" type="submit">
            Login
          </button>
          <p className="text">
            Don't Have an account ? <Link to="/signUp">REGISTER NOW</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
