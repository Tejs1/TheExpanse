import { useState } from "react";
import { data } from "../Utils/data";
import TwoRangeSlider from "./TwoWaySlider";
const list = data.data;

export default function Filter() {
  const [state, dispatch] = useState({ priceRange: { min: 0, max: 125000 } });
  const [rangeMinVal, setRangeMinVal] = useState(0);
  const [rangeMaxVal, setRangeMaxVal] = useState(125000);
  function rangeHandler(min, max) {
    console.log(state);
    console.log(filterByMassRange(min, max, list));
    dispatch({ priceRange: { min: min, max: max } });
  }

  const filterByMassRange = (range, products) => {
    switch (range) {
      case "0":
        return [...products]
          .filter((product) => Number(product.mass) < 20000)
          .map((ship) => ship.name);
      case "25000":
        return [...products]
          .filter((product) => Number(product.mass) <= 25000)
          .map((ship) => ship.name);
      case "50000":
        return [...products]
          .filter((product) => Number(product.mass) <= 50000)
          .map((ship) => ship.name);
      case "75000":
        return [...products]
          .filter((product) => Number(product.mass) <= 75000)
          .map((ship) => ship.name);
      case "100000":
        return [...products]
          .filter((product) => Number(product.mass) <= 100000)
          .map((ship) => ship.name);
      case "125000":
        return [...products]
          .filter((product) => Number(product.mass) > 100000)
          .map((ship) => ship.name);
      default:
        return products;
    }
  };
  return (
    <div className="filter">
      <section className="filter-bar">
        <div className="filter-comp flex-row">
          <h3>Filters</h3>
          <button>Clear</button>
        </div>
        <div className="filter-comp">
          <div className="filter-mass">
            <h3 className="filter-heading">Mass [KG]</h3>
            <div className="mass-wrapper">
              <div className="range-list">
                <TwoRangeSlider
                  min={0}
                  max={125000}
                  minVal={rangeMinVal}
                  maxVal={rangeMaxVal}
                  setMaxVal={setRangeMaxVal}
                  setMinVal={setRangeMinVal}
                  onChange={({ min, max }) => {
                    console.log(`min = ${min}, max = ${max}`);
                  }}
                />
              </div>
              <div className="weight-list">
                <label>over</label>
                <label>100,000</label>
                <label>75,000</label>
                <label>50,000</label>
                <label>25,000</label>
                <label>below</label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">classification</h3>
          <ul className="list">
            <li>
              <input type="checkbox" id="Combact" />
              <label htmlFor="Combact">ComBact</label>
            </li>
            <li>
              <input type="checkbox" id="Transport" />
              <label htmlFor="Transport">Transport</label>
            </li>
            <li>
              <input type="checkbox" id="Industrial" />
              <label htmlFor="Industrial">Industrial</label>
            </li>
          </ul>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">Manufacturers</h3>
          <ul className="list">
            <li>
              <input type="radio" name="rate" id="ANVIL" />
              <label htmlFor="ANVIL">Anvil Aerospace</label>
            </li>
            <li>
              <input type="radio" name="rate" id="BANU" />
              <label htmlFor="BANU">BANU</label>
            </li>
            <li>
              <input type="radio" name="rate" id="DRAKE" />
              <label htmlFor="DRAKE">Drake Interplanetary</label>
            </li>
          </ul>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">PRICE RANGE</h3>
          <ul className="list">
            <li>
              <input type="radio" name="sort" id="sortzero" />
              <label htmlFor="sortzero">Any Price</label>
            </li>
            <li>
              <input type="radio" name="sort" id="sortone" />
              <label htmlFor="sortone">$100 to $200</label>
            </li>
            <li>
              <input type="radio" name="sort" id="sorttwo" />
              <label htmlFor="sorttwo">$200 to $500</label>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
