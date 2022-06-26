import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <Routes>
        {/* <Route path="/" element={<ProductListing />} /> */}
        <Route path="store" element={<Store />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        {/* <Route path="whishlist" element={<Wishlist />} /> */}
        {/* <Route path="auth" element={<Auth />} /> */}
        {/* <Route path="product/:id" element={<Product />} /> */}
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
