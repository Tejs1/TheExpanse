import React from "react";
import "./wishlist.css";
import { Link } from "react-router-dom";

export default function Whishlist() {
  return (
    <div class=" whishlist products-listing">
      <div class="products-row">
        <div class="product-item ">
          <div>
            <img
              src="https://media.robertsspaceindustries.com/pnxa8gu3m0wut/store_small.jpg"
              alt="ship"
            />
          </div>
          <div class="info ">
            <div class="title">
              Aurora ES
              <span> - Roberts Space Industries</span>
            </div>

            <Link to={`ships/${"id"}`} className=" smallbtn b" ship={"name"}>
              <span className="smallbtn-top">Add To Cart</span>
              <span className="smallbtn-bottom"></span>
            </Link>
          </div>
        </div>
        <div class="product-item ">
          <img
            src="https://media.robertsspaceindustries.com/pnxa8gu3m0wut/store_small.jpg"
            class="trans-02s"
            alt="ship"
          />
          <div class="info ">
            <div class="title">
              Aurora ES
              <span> - Roberts Space Industries</span>
            </div>
            <a
              class="holosmallbtn add-cart add-cart"
              href="/pledge/ships/rsi-aurora/Aurora-ES"
            >
              <span class="holosmallbtn-top abs-overlay trans-02s js-label">
                view specs
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
