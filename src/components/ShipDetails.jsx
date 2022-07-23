import React from "react";
import "./ShipDetails.css";
import { useParams } from "react-router-dom";
import { data } from "../Utils/data";
import { modifyLink } from "../Utils/modifyLink";
const list = data.data;

export function ShipDetails() {
  const { id } = useParams();
  const currentShip = list.find((ship) => ship.id === id);
  const {
    description,
    manufacturer,
    name: ship_name,
    media: [
      {
        images: { store_slideshow_large },
      },
    ],
    production_status,
  } = currentShip;
  const {
    name: manufacturer_name,
    media: [
      {
        images: { icon: manufacturer_icon },
      },
    ],
    known_for,
  } = manufacturer;
  console.log(store_slideshow_large);
  return (
    <section id="intro">
      <div className="headline ">
        <div className="titles">
          <div className="manufacturer">{manufacturer_name}</div>
          <h1>
            {ship_name}
            <span>FROM</span>
            <img
              title={manufacturer_name + " known for " + known_for}
              // src="/media/w0o33qmdai9wpr/icon/Anvil.png"
              src={modifyLink(manufacturer_icon)}
              alt="manufacturer_icon"
            />
          </h1>
        </div>
        <div className="thumb">
          <img
            src={modifyLink(store_slideshow_large)}
            width="1200"
            height="400"
            alt={ship_name + " image"}
          />
          <div className="mask"></div>
        </div>
      </div>

      <div id="overview">
        <div className="subnav-placeholder">
          <div className="subnav js-subnav-ship clearfix trans-02s">
            <div className="wcontent clearfix no-variant">
              <a
                href="#overview"
                className="trans-02s js-scrollto anchor first active"
              >
                Overview
              </a>
              <a href="#features" className="trans-02s js-scrollto anchor">
                Media
              </a>{" "}
              <a href="#holo-viewer" className="trans-02s js-scrollto anchor">
                Technical overview
              </a>
            </div>
          </div>
        </div>

        <div className="description clearfix">
          <div className="excerpt">{description}</div>

          <div className="clearfix"></div>

          <div className="prod-status green">
            <span> {production_status}</span>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
