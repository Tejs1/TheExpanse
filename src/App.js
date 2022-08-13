import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Store } from "./components/Store";
import { ShipDetails } from "./components/ShipDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <Routes>
        {/* <Route path="/" element={<ProductListing />} /> */}
        <Route path="/store" element={<Store />} />
        <Route path="cart" element={<Cart/>} />
        {/* <Route path="whishlist" element={<Wishlist />} /> */}
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
    </div>
  );
}

export default App;
