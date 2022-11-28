import React from "react";

export default function CartProduct() {
  return (
    <div className="item">
      <div className="item__wrapper">
        <header className="item__header">
          <div className="item__thumbnail">
            <img
              alt="ship"
              src="https://media.robertsspaceindustries.com/x05t2v69f2frf/store_small.jpg"
            />
          </div>
          <div className="item__information">
            <span className="SkuIcon">
              <svg
                viewBox="0 0 40 40"
                width="1em"
                height="1em"
                className="SkuIcon-icon"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#2F383D"
                    d="M27.94 2.734c.017.166.036.32.054.461.134.017.28.034.436.05 2.939.299 3.02 4.551.094 4.962-.216.03-.412.061-.585.091-.027.165-.056.35-.084.555-.13.957-.674 1.595-1.356 1.916.307.426.479.948.471 1.495l-.018 1.298c0 .018.062.07.186.153a2.5 2.5 0 012.175-1.266h.9a2.5 2.5 0 012.5 2.5v.468a2.501 2.501 0 01.96 2.868l-.695 2.055a2.5 2.5 0 01-2.726 1.673l-.401-.058a2.5 2.5 0 01-2.204 1.386l-.908.013a2.5 2.5 0 01-.91-.158l.11 3.379a2.53 2.53 0 011.282-.535c.381-.05.709-.103.978-.155.053-.278.107-.617.16-1.012.388-2.932 4.648-2.878 4.963.062.036.34.075.636.113.887.244.037.53.072.856.105 2.94.3 3.02 4.552.095 4.963-.393.055-.73.11-1.006.165-.051.267-.104.592-.155.97-.4 2.923-4.644 2.864-4.963-.069-.035-.32-.071-.6-.108-.84a19.745 19.745 0 00-.87-.113 2.555 2.555 0 01-1.216-.442l.009.258c.052 1.606-1.331 2.701-2.728 2.576-.27 1.3-.797 2.875-1.576 4.765-.842 2.042-3.724 2.07-4.604.044-.8-1.842-1.333-3.397-1.59-4.707-1.478.215-2.965-.967-2.852-2.647l.503-7.464a2.5 2.5 0 01-.872.17l-.745.01a2.5 2.5 0 01-2.33-1.505l-1.04.087a2.5 2.5 0 01-2.707-2.399l-.066-1.785a2.5 2.5 0 011.12-2.178v-.553c0-.879.454-1.652 1.14-2.098a7.346 7.346 0 00-.057-.298 21.125 21.125 0 00-1.943-.285c-2.936-.318-2.99-4.57-.063-4.963.878-.118 1.567-.241 2.05-.363.123-.493.247-1.197.367-2.096.389-2.932 4.648-2.878 4.964.063a20.8 20.8 0 00.287 1.97c.47.097 1.118.19 1.93.273.293.03.558.099.795.2l.105-.17.235-1.194a2.5 2.5 0 012.418-2.017l1.85-.026h.03c.362-.454.905-.79 1.631-.887.207-.027.394-.055.56-.083.028-.174.058-.37.087-.588.389-2.932 4.648-2.878 4.964.063z"
                  ></path>
                  <path
                    fill="#FFF7E0"
                    d="M20.727 28.875c.347 1.058.442 2.179.286 3.363-.157 1.183-.674 2.84-1.552 4.97-.914-2.105-1.427-3.747-1.538-4.927a9.021 9.021 0 01.294-3.371l2.51-.035zm10.11-3.673c.159 1.489.364 2.358.615 2.609.252.252 1.114.453 2.586.603-1.482.208-2.35.44-2.605.694-.257.257-.486 1.117-.685 2.579-.159-1.458-.362-2.312-.612-2.561-.245-.245-1.106-.448-2.583-.608 1.473-.198 2.34-.427 2.602-.689.255-.256.483-1.132.681-2.627zM20.703 6.729l.326 1.88.134-.001.34.6-.038 2.727-.134.897.281-.485.792-1.107 2.065.99-.018 1.297-.76 1.57 4.968 1.853.653.132v-2.133h.9l-.001 2.315 1.093.22-.695 2.054-2.755-.398c-.001.08-.082.647-.243 1.701l-.908.013-2.828-1.22-.664.009.366 11.257-.68-.548-.495-.978-.093-1.151h-5.671l-.132 1.234-.486.992-.8.568.76-11.272-.6.008-3.058 1.304-.746.01-.129-1.696-3.414.286-.066-1.785 1.121-.296v-2.343h.9v2.105l.501-.132 4.954-1.992-.57-1.552.019-1.298 2.243-1.05.673.963.294.6-.146-.913.038-2.707.38-.61.106-.001.372-1.891 1.85-.026zm1.059 14.682l-.628.844.252 1.508-.17.29v2.352h-3.273v-2.376l-.247-.266.247-1.508-.579-.784-.592 5.506h5.437l-.447-5.566zm-11.2-15.952c.222 2.069.506 3.277.855 3.625.35.35 1.548.63 3.594.839-2.06.29-3.267.61-3.62.963-.357.358-.675 1.552-.952 3.584-.22-2.026-.504-3.212-.85-3.558-.34-.34-1.537-.622-3.589-.845 2.046-.275 3.25-.594 3.614-.957.356-.356.672-1.573.948-3.651zM25.454 3c.135 1.266.31 2.006.523 2.219.215.214.948.385 2.2.513-1.261.177-2 .373-2.216.59-.218.218-.413.95-.583 2.193-.134-1.24-.308-1.966-.52-2.178-.208-.208-.94-.38-2.196-.517 1.252-.168 1.99-.363 2.212-.586.218-.217.41-.962.58-2.234z"
                  ></path>
                </g>
              </svg>
            </span>
            <a href="/" target="_blank">
              <h4 className="item__title">Constellation Aquila</h4>
            </a>
            <span className="item__subtitle">Standalone Ship</span>
            <p className="item__stock">in stock</p>
          </div>
        </header>
        <div className="item__quantity">
          <div className="quantity-selector">
            <button>+</button>
            <div className="quantity">7</div>
            <button>-</button>
          </div>
        </div>

        <div className="item__endline">
          <div className="item__prices">
            <span className="TooltipTaxDescription FloatingTooltip-wrapper-children">
              <div className="PriceCompact">
                <div className="Price-price-bloc">
                  <span className="Price-price">
                    <span className="Price-price-integer">310</span>
                  </span>
                  <div className="Price-price-extra">
                    <span className="Price-currency-code">USD</span>
                    <span className="Price-decimals">.00</span>
                  </div>
                  <span className="Price-currency-symbol">$</span>
                </div>
              </div>
            </span>
          </div>
          <div className="item__remove">
            <svg
              viewBox="0 0 14 14"
              width="1em"
              height="1em"
              className="item__remove-icon"
            >
              <path
                fillRule="evenodd"
                d="M8.768 7l4.684 4.685c.533.532.582 1.363.089 1.856-.493.493-1.324.444-1.856-.089L7 8.768l-4.685 4.684c-.532.533-1.363.582-1.856.089-.493-.493-.444-1.324.089-1.856L5.232 7 .548 2.315C.015 1.783-.034.952.459.46.952-.034 1.783.015 2.315.548L7 5.232 11.685.548c.532-.533 1.363-.582 1.856-.089.493.493.444 1.324-.089 1.856L8.768 7z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
