import React from "react";
import { CartItems } from "./CartItems";
import { CartSummary } from "./CartSummary";
import "./cart.css";

function Cart() {
  return (
    <div className="Cart">
      <CartItems />
      <CartSummary />
    </div>
  );
}

export default Cart;
