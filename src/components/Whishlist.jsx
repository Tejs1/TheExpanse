import React from "react";
import "./wishlist.css";
import WishlistProduct from "./WishlistProduct";

export default function Whishlist() {
  return (
    <div className="whishlist products-listing">
      <div className="wrapper">
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
      </div>
    </div>
  );
}
