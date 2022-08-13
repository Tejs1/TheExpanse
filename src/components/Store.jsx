import React from "react";
import "./Store.css";
import Filter from "./Filter";
import ProductList from "./ProductList";

export function Store() {
  return (
    <div className="container">
      <Filter />
      <ProductList />
    </div>
  );
}
