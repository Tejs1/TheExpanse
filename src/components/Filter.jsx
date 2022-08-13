import React from "react";

export default function Filter() {
  return (
    <div className="filter">
      <section className="filter-bar">
        <div className="filter-comp flex-row">
          <h3>Filters</h3>
          <button>Clear</button>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">Mass [KG]</h3>
          <div className="range-list">
            <div className="weight list">
              <label>below</label>
              <label>20,000</label>
              <label>50,000</label>
              <label>80,000</label>
              <label>100,000</label>
              <label>over</label>
            </div>
            <input type="range" className="range" height="5px" width="5px" />
          </div>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">classification</h3>
          <ul className="list">
            <li>
              <input type="checkbox" id="combact" />
              <label htmlFor="Combact">ComBact</label>
            </li>
            <li>
              <input type="checkbox" id="transport" />
              <label htmlFor="TransPort">Transport</label>
            </li>
            <li>
              <input type="checkbox" id="industrial" />
              <label htmlFor="Industrial">Industrial</label>
            </li>
          </ul>
        </div>
        <div className="filter-comp">
          <h3 className="filter-heading">Manufacturers</h3>
          <ul className="list">
            <li>
              <input type="radio" name="rate" id="anvil" />
              <label htmlFor="Anvil">Anvil Aerospace</label>
            </li>
            <li>
              <input type="radio" name="rate" id="banu" />
              <label htmlFor="BANU">BANU</label>
            </li>
            <li>
              <input type="radio" name="rate" id="drake" />
              <label htmlFor="Drake ">Drake Interplanetary</label>
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
              <label htmlFor="sortone">$200 to $500</label>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
