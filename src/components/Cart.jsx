import React from "react";
import { CartItems } from "./CartItems";
import { CartSummary } from "./CartSummary";
import "./cart.css";

function Cart() {
  return (
    <div className="Cart">
      <div className="cart-wrapper">
        <CartItems />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
