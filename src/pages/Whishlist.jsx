import React from "react";
import "./wishlist.css";
import WishlistProduct from "../components/WishlistProduct";
import { useWhishlist } from "../context/whislist-context";

export default function Whishlist() {
  const { whishlistItems } = useWhishlist();
  const redo = "red";

  return (
    <div className="whishlist products-listing">
      <div className="wrapper">
        {whishlistItems.map((whishlistItemId) => (
          <WishlistProduct
            id={whishlistItemId}
            key={"wishlisted" + whishlistItemId}
          />
        ))}
      </div>
      <div className="stylescss">
        <div className="container">ASDF</div>
        <div className="yhf">
          <p>hhhh</p>
        </div>
      </div>
    </div>
  );
}
