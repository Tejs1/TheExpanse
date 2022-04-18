import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="km-nav-bar" id="nav">
      <div className="km-nav-logo">
        <a href="../index.html">
          <h1>Expanse</h1>
        </a>
      </div>
      <div className="km-right-nav">
        <div className="km-nav-searchbar">
          <input type="search" placeholder="Search..." className="km-input" />
        </div>
        <div className="km-nav-user">
          <div className="km-nav-icons">
            <span className="km badge i">
              <svg fill="none" viewBox="0 0 16 16" width="30" height="30">
                <path
                  fill="#E2E5E9"
                  fillRule="evenodd"
                  d="M0 1c0 .553.442 1 .986 1h5.526A.993.993 0 007.5 1c0-.552-.442-1-.987-1H.986A.993.993 0 000 1zm5 7.998V5.991h8.444l-1.92 3.007H5zm10.107-4.992L3.89 3.996a.9.9 0 00-.89.909V10.1a.9.9 0 00.892.908h8.157a.89.89 0 00.765-.44L15.87 5.38c.357-.605-.071-1.375-.764-1.375zM4.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="bubble icon">2</span>
            </span>
          </div>
          <div className="km-nav-icons">
            <div className="km badge i">
              <svg height="30" viewBox="0 0 24 24" width="30" fill="#E2E5E9">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <button className="cta-btn">
              <div></div>
              <span className="cta-btn__text">
                <strong>LOGIN</strong>
              </span>
              <div></div>
            </button>
            <button className="cta-btn">
              <div></div>
              <span className="cta-btn__text">
                <strong>SIGN UP</strong>
              </span>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
