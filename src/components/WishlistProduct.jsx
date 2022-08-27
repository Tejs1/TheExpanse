import React from "react";
import { Link } from "react-router-dom";
import { data } from "../Utils/data";
import { modifyLink } from "../Utils/modifyLink";
const list = data.data;

export default function WishlistProduct({ id }) {
  const currentShip = list.find((ship) => ship.id === id);
  const {
    manufacturer,
    name: ship_name,
    media: [
      {
        images: { store_small },
      },
    ],
  } = currentShip;
  return (
    <div className="product-item" key={id + "whishlist"}>
      <div className="product-img">
        <img
          src={modifyLink(store_small)}
          // src="https://media.robertsspaceindustries.com/pnxa8gu3m0wut/store_small.jpg"
          alt="ship"
        />
      </div>
      <div className="info ">
        <div className="title">
          {ship_name}
          <span> - {manufacturer.name}</span>
        </div>
        <div className="buttons">
          <Link
            to={`ships/${"id"}`}
            className=" smallbtn b secondary"
            ship={"name"}
          >
            <span className="smallbtn-top trans-02s">Remove</span>
            <span className="smallbtn-bottom trans-02s"></span>
          </Link>
          <Link to={`ships/${"id"}`} className=" smallbtn b " ship={"name"}>
            <span className="smallbtn-top trans-02s">Add To Cart</span>
            <span className="smallbtn-bottom trans-02s"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
