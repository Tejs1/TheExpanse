import React from "react";
import { CartHeader } from "./CartHeader";
import { CheckoutButton } from "./CheckoutButton";
import CartProduct from "./CartProduct";
import { useCart } from "../context/cart-context";

export function CartItems() {
  const { cartItems } = useCart();
  const { itemList, numOfItems } = cartItems;
  console.log(itemList);
  return (
    <div className="cart_items">
      <CartHeader />
      <div id="cart-main">
        <section>
          <div className="cart_items-wrapper">
            <h4 className="cart_items-title">{numOfItems} Items</h4>
            <div className="cart_items-list">
              {itemList.map((item) => (
                <CartProduct product={item} key={"cart" + item.itemId} />
              ))}
            </div>
          </div>
          <CheckoutButton />
        </section>
      </div>
    </div>
  );
}
