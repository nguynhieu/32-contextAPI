import React, { Component } from "react";

import { CartContext } from "../../contexts/Cart";

import "./Product.css";

export default class Product extends Component {
  render() {
    const { title, bookCover, price, total, product } = this.props;

    return (
      <div className="Product">
        <img src={bookCover} alt={title} />
        <div className="Product-price">{`Price: ${price}`}</div>
        <div className="Product-total">{`Total: ${total}`}</div>
        <CartContext.Consumer>
          {({ addToCart }) => (
            <button onClick={() => addToCart(product)}>Add to cart</button>
          )}
        </CartContext.Consumer>
      </div>
    );
  }
}
