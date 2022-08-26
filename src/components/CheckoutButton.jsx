import React from "react";

export function CheckoutButton() {
  return (
    <div className="ContinueButton">
      <div className="ContinueButton-clipper">
        <div className="PriceCompact">
          <div className="Price-price-bloc">
            <span className="Price-price">
              <span className="Price-price-integer">390</span>
            </span>
            <div className="Price-price-extra">
              <span className="Price-currency-code">USD</span>
              <span className="Price-decimals">.00</span>
            </div>
            <span className="Price-currency-symbol">$</span>
          </div>
          <pre className="PriceFrequency"></pre>
        </div>
      </div>
      <button type="button" className="CtaClipper ContinueButton-continue">
        <div className="CtaClipper__content">
          <figure className="CtaClipper__icon">
            <svg
              viewBox="0 0 21 12"
              width="1em"
              height="1em"
              className="cta__icon"
            >
              <path
                fillRule="evenodd"
                d="M11.242 11.078l8.336-8.336A1.61 1.61 0 0019.577.47a1.602 1.602 0 00-2.272 0l-7.198 7.199-7.2-7.2A1.61 1.61 0 00.638.47a1.602 1.602 0 00-.002 2.272l8.337 8.336a1.6 1.6 0 001.133.469c.414.002.823-.156 1.137-.469z"
              ></path>
            </svg>
          </figure>
          <span className="CtaClipper__text CtaClipper__title">continue</span>
        </div>
      </button>
    </div>
  );
}
