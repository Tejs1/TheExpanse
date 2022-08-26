import React from "react";
import { CartHeader } from "./CartHeader";
import { CheckoutButton } from "./CheckoutButton";
import CartProduct from "./CartProduct";

export function CartItems() {
  return (
    <div className="cart_items">
      <CartHeader />
      <div id="cart-main">
        <section>
          <div className="cart_items-wrapper">
            <h4 className="cart_items-title">7 Items</h4>
            <div className="cart_items-list">
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
          </div>
          <CheckoutButton />
        </section>
      </div>
    </div>
  );
}
