import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import ProductInCart from "../../ProductInCart/ProductInCart";

import { CartContext } from "../../../contexts/Cart";

export default class CartPage extends Component {
  render() {
    if (!localStorage.getItem("sessionId")) {
      return <Redirect to="/registered-name" />;
    }

    return (
      <div className="ShoppingPage">
        <CartContext.Consumer>
          {({ cartProduct }) =>
            cartProduct.map((product, index) => (
              <ProductInCart
                key={index}
                product={product}
                title={product.title}
                bookCover={product.bookCover}
                price={product.price}
              />
            ))
          }
        </CartContext.Consumer>
      </div>
    );
  }
}
