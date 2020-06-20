import React, { Component } from "react";

import "./ProductInCart.css";

export default class ProductInCart extends Component {
  render() {
    const { title, bookCover, price } = this.props;

    return (
      <div className="ProductInCart">
        <img src={bookCover} alt={title} />
        <div className="ProductInCart-bottom">
          <div className="ProductInCart-price">{`Price: ${price}`}</div>
          <div className="ProductInCart-action">
            <button>Remove</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    );
  }
}
