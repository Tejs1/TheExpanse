import React from "react";

export function CartSummary() {
  return (
    <div className="clipper">
      <div className="clipper__content" style={{ stroke: "none" }}>
        <div></div>
        <div>
          <h3 className="OrderSummary-title">Cart summary</h3>
          <div className="OrderSummary-info">
            <div className="left">
              <p className="OrderSummary-info-label">
                Subtotal
                <br />
                <span className="small">6 items</span>
              </p>
            </div>
            <div className="right">
              <div className="PriceLine">
                <div className="Price-price-bloc">
                  <span className="Price-price">650</span>
                  <span className="Price-decimals">.00</span>
                  &nbsp;
                  <span className="Price-currency-code">USD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="OrderSummary-coupon OrderSummary-info OrderSummary-editable-info">
            <div className="left">
              <p className="OrderSummary-info-label">Coupon</p>
            </div>
            <div className="right">
              <button className="OrderSummary-info-add">Add</button>
            </div>
          </div>
          <div className="OrderSummary-credit OrderSummary-info OrderSummary-editable-info">
            <div className="left">
              <p className="OrderSummary-info-label">Store Credits</p>
            </div>
            <div className="right">
              <button className="OrderSummary-info-add">Add</button>
            </div>
          </div>
          <div className="OrderSummary-info OrderSummary-info-total">
            <div className="left">
              <p className="total-label">Total:</p>
            </div>
            <div className="right">
              <div className="PriceCompact">
                <div className="Price-price-bloc">
                  <span className="Price-price">
                    <span className="Price-price-integer">650</span>
                  </span>
                  <div className="Price-price-extra">
                    <span className="Price-currency-code">USD</span>
                    <span className="Price-decimals">.00</span>
                  </div>
                  <span className="Price-currency-symbol">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
