import React from "react";

function Product() {
  return (
    <li className="ship-item">
      <div className="center ">
        <img src="/assets/img/store_large.jpg" className="ship" alt="ship" />
        <div className="blue-overlay"></div>
        <a className="filet" href="/ships/hurricane">
          <span className="name">
            THE CATERPILLAR BEST IN SHOW EDITION
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
          Max Crew / Human :<span>4</span>
        </span>
        <span className="length spec">
          Length / Meters :<span>111.5</span>
        </span>
        <span className="mass spec">
          Mass / Kg :<span>1608.205</span>
        </span>
        <span className="manufacturer spec">
          Manufacturer :
          <img
            className="logo"
            height="31"
            width="31"
            src="/assets/img/Drake.png"
            alt="logo"
          />
        </span>
      </div>
    </li>
  );
}

export default Product;
