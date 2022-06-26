import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { data } from "../Utils/data";
const list = data.data;

function ProductList() {
  return (
    <div id="store-wrapper">
      <ul className="ship-listing">
        {list.map((ship) => (
          <Product ship={ship} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
