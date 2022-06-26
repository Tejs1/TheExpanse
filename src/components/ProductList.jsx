import React from "react";
import Product from "./Product";
function ProductList() {
  return (
    <div id="store-wrapper">
      <ul className="ship-listing">
        <Product />
        <li className="ship-item">
          <div className="center w">
            <div className="blue-overlay"></div>
            <a className="filet" href="/ships/hurricane">
              <span className="name">
                JAVELIN
                <span className="focus">- Destroyer</span>
              </span>
            </a>

            <div className="content"></div>

            <a className="smallbtn" href="/ships/hurricane" data-sku="">
              <span className="smallbtn-top">Add To Cart</span>
              <span className="smallbtn-bottom"></span>
            </a>
          </div>
          <div className="bottom">
            <span className="crew spec">
              Max Crew / Human :<span>80</span>
            </span>
            <span className="length spec">
              PRICE / Starcoin:<span>480.0</span>
            </span>
            <span className="mass spec">
              Mass / Kg :<span>109860.179</span>
            </span>
            <span className="manufacturer spec">
              Manufacturer :
              <img
                className="logo"
                height="31"
                width="31"
                src="../styles/img/ships/Aegis.png"
                alt="Anvil"
              />
            </span>
          </div>
        </li>

        <li className="ship-item">
          <div className="center e">
            <div className="blue-overlay"></div>
            <a className="filet" href="/ships/hurricane">
              <span className="name">
                Hurricane
                <span className="focus">- Heavy Fighter</span>
              </span>
            </a>

            <div className="content"></div>

            <a className="smallbtn" href="/ships/hurricane" data-sku="">
              <span className="smallbtn-top">Add To Cart</span>
              <span className="smallbtn-bottom"></span>
            </a>
          </div>
          <div className="bottom">
            <span className="crew spec">
              Max CREW / Human :<span>2</span>
            </span>
            <span className="length spec">
              PRICE / Starcoin:<span>22.0</span>
            </span>
            <span className="mass spec">
              Mass / Kg :<span>86454</span>
            </span>
            <span className="manufacturer spec">
              ManufactuREr :
              <img
                className="logo"
                height="31"
                width="31"
                src="../styles/img/ships/Anvil.png"
                alt="BANU"
              />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
