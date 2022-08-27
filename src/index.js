import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { WhishlistProvider } from "./context/whislist-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WhishlistProvider>
        <App />
      </WhishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
