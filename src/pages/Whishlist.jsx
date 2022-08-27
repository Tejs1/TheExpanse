import React from "react";
import "./wishlist.css";
import WishlistProduct from "../components/WishlistProduct";
import { useWhishlist } from "../context/whislist-context";

export default function Whishlist() {
  const { whishlistItems } = useWhishlist();

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
    </div>
  );
}
