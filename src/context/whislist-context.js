import { createContext, useContext, useState } from "react";

const defaultProvoderValue = {
  items: 4,
  logger: () => console.log("Whishlisting..."),
};
const WhishlistContext = createContext(defaultProvoderValue);
const WhishlistProvider = ({ children }) => {
  const [WhishlistItems, setWhishlistItems] = useState(["1", "2"]);

  function addToWhishlist(item) {
    // console.log(item);
    setWhishlistItems((WhishlistItems) => [...WhishlistItems, item]);
  }
  return (
    <>
      <WhishlistContext.Provider value={{ addToWhishlist, WhishlistItems }}>
        {children}
      </WhishlistContext.Provider>
    </>
  );
};
const useWhishlist = () => useContext(WhishlistContext);

export { useWhishlist, WhishlistProvider };
