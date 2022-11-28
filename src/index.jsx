import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WhishlistProvider } from "./context/whislist-context";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <WhishlistProvider>
      <App />
    </WhishlistProvider>
  </BrowserRouter>
);
