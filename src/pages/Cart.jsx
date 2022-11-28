import React from "react";
import { CartItems } from "../components/CartItems";
import { CartSummary } from "../components/CartSummary";
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
