import React from "react";
import Product from "./Product";
import { data } from "../utils/data";
const list = data.data;

function ProductList() {
  return (
    <div id="store-wrapper">
      <ul className="ship-listing">
        {list.map((ship) => (
          <Product key={ship.id} ship={ship} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
