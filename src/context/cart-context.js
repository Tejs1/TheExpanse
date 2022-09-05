import { createContext, useContext, useState } from "react";

const defaultProviderValue = {
  items: 4,
  logger: () => console.log("Cart context is not configured..."),
};
const CartContext = createContext(defaultProviderValue);
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({
    itemList: [
      { itemId: "1", itemQuantity: 1 },
      { itemId: "155", itemQuantity: 2 },
      { itemId: "159", itemQuantity: 4 },
    ],
    numOfItems: 3,
  });

  function addToCart(item) {
    setCartItems((cartItems) => [...cartItems, item]);
  }
  return (
    <>
      <CartContext.Provider value={{ addToCart, cartItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
