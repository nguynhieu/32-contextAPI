import React from "react";
import axios from "axios";

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const sessionId = localStorage.getItem("sessionId");
    axios
      .post("https://t5xgx.sse.codesandbox.io/cart", {
        product,
        sessionId
      })
      .then(res => {
        console.log(res);
      });

    this.setState({
      cartProduct: this.state.cartProduct.concat(product)
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartProduct: this.state.cartProduct,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
