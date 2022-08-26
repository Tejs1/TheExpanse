import React from "react";
import { Link } from "react-router-dom";

export default function WishlistProduct() {
  return (
    <div className="product-item ">
      <div className="product-img">
        <img
          src="https://media.robertsspaceindustries.com/pnxa8gu3m0wut/store_small.jpg"
          alt="ship"
        />
      </div>
      <div className="info ">
        <div className="title">
          Aurora ES
          <span> - Roberts Space Industries</span>
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
