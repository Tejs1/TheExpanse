import { createContext, useContext, useState } from "react";

const defaultProviderValue = {
  items: 4,
  logger: () => console.log("Whishlisting..."),
};
const WhishlistContext = createContext(defaultProviderValue);
const WhishlistProvider = ({ children }) => {
  const [whishlistItems, setWhishlistItems] = useState(["1", "155", "159"]);

  function addToWhishlist(item) {
    setWhishlistItems((whishlistItems) => [...whishlistItems, item]);
  }
  function removeFromWhishlist(item) {
    setWhishlistItems(whishlistItems.filter((id) => id !== item));
  }

  return (
    <>
      <WhishlistContext.Provider
        value={{ addToWhishlist, whishlistItems, removeFromWhishlist }}
      >
        {children}
      </WhishlistContext.Provider>
    </>
  );
};
const useWhishlist = () => useContext(WhishlistContext);

export { useWhishlist, WhishlistProvider };
