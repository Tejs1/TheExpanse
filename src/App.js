import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Store } from "./pages/Store";
import { ShipDetails } from "./pages/ShipDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Whishlist from "./pages/Whishlist";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>

      <Routes>
        {/* <Route path="/" element={<ProductListing />} /> */}
        <Route path="/store" element={<Store />} />
        <Route path="cart" element={<Cart />} />
        <Route path="whishlist" element={<Whishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/store/ships/:id" element={<ShipDetails />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>THere's notHing Here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
