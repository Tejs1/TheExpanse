import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Utils/data";
const list = data.data;

export function ShipDetails() {
  const { id } = useParams();
  console.log(id);
  return <div>ShipDetails{id}</div>;
}
