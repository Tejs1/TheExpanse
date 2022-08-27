import { useState } from "react";
import "./ShipDetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../Utils/data";
import { modifyLink } from "../Utils/modifyLink";
import { useWhishlist } from "../context/whislist-context";
const list = data.data;

export function ShipDetails() {
  const { addToWhishlist, whishlistItems } = useWhishlist();
  const { id } = useParams();
  const currentShip = list.find((ship) => ship.id === id);
  const {
    cargocapacity,
    description,
    manufacturer,
    name: ship_name,
    price,
    mass,
    max_crew,
    focus,
    length,
    height,
    scm_speed,
    compiled: {
      RSIAvionic: {
        computers: [{ size: computers_size }],
        radar: [{ size: radar_size }],
      },
    },
    media: [
      {
        images: { store_slideshow_large },
      },
    ],
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

  const [isWhishlisted, setIsWhishlisted] = useState(
    whishlistItems.includes(id)
  );

  return (
    <section id="intro">
      <div className="headline ">
        <div className="titles">
          <div className="manufacturer">-{manufacturer_name}</div>
          <h1>
            {ship_name}
            <span>FROM</span>
            <img
              title={manufacturer_name + " known for " + known_for}
              src={modifyLink(manufacturer_icon)}
              alt="manufacturer_icon"
            />
          </h1>
        </div>
        <div className="thumb">
          <img
            src={modifyLink(store_slideshow_large)}
            alt={ship_name + " image"}
          />
          <div className="mask"></div>
        </div>
      </div>
      <div id="overview">
        <div className="subnav-placeholder">
          <div className="subnav ">
            <div className="wcontent ">
              <a href="#overview" className=" anchor first ">
                Overview
              </a>
            </div>
          </div>
        </div>
        <div className="description clearfix">
          <div className="excerpt">{description}</div>
          <div className="clearfix"></div>
          <div className="prod-status green">
            <span> Statistics</span>
            <p></p>
          </div>
          <div className="stats">
            <table>
              <thead>
                <tr>
                  <th title="length">Lengh</th>
                  <th title="height">Height</th>
                  <th title="mass">Mass [KG]</th>
                  <th title="speed">SCM Speed</th>
                  <th title="capacity">Capacity</th>
                  <th title="price">Price</th>
                  <th title="crew">Crew</th>
                </tr>
              </thead>
              <tbody data-testid="app-tbody">
                <tr>
                  <td>{length} m</td>
                  <td>{height} m</td>
                  <td>{mass} Kg</td>
                  <td>{scm_speed} m/s</td>
                  <td>{cargocapacity}</td>
                  <td>{price}</td>
                  <td>{max_crew}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th title="focus">Focus</th>
                  <th title="radar">Radar</th>
                  <th title="computers">Computers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{focus}</td>
                  <td>{computers_size} computer</td>
                  <td>{radar_size} radar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description_cta">
            {isWhishlisted ? (
              <Link
                to={`/whishlist`}
                className="smallbtn b holobtn add-to-whishlist secondary"
                ship={ship_name}
              >
                <span className="smallbtn-top trans-02s">OPEN list</span>
                <span className="smallbtn-bottom trans-02s"></span>
              </Link>
            ) : (
              <button
                className="smallbtn b holobtn add-to-whishlist secondary"
                ship={ship_name}
                onClick={() => {
                  addToWhishlist(id);
                  setIsWhishlisted(true);
                }}
              >
                <span className="smallbtn-top trans-02s">ADD TO list</span>
                <span className="smallbtn-bottom trans-02s"></span>
              </button>
            )}
            <Link className="smallbtn a holobtn add-to-cart" to={"/"}>
              <span className="smallbtn-top trans-02s">Add To Cart</span>
              <span className="smallbtn-bottom trans-02s"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
