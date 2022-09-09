import { useState } from "react";
import { data } from "../Utils/data";
import TwoRangeSlider from "./TwoWaySlider";
const list = data.data;

export default function Filter() {
  const [rangeMinVal, setRangeMinVal] = useState(0);
  const [rangeMaxVal, setRangeMaxVal] = useState(125000);
  function rangeHandler(min, max) {
    console.log(filterByMassRange(min, max, list));
  }

  const filterByMassRange = (min, max, products) => {
    if (max === 125000) {
      return [...products]
        .filter((product) => Number(product.mass) > min)
        .map((ship) => ship.name);
    } else {
      return [...products]
        .filter(
          (product) => min < Number(product.mass) && Number(product.mass) < max
        )
        .map((ship) => ship.name);
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
                    rangeHandler(min, max);
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
