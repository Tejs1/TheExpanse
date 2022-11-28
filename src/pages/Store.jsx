import React from "react";
import "./Store.css";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

export default function Store() {
  return (
    <div className="container">
      <Filter />
      <ProductList />
    </div>
  );
}
