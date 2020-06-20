import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Product from "../../Product/Product";

export default class ShoppingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get("https://t5xgx.sse.codesandbox.io/api/books").then(res => {
      this.setState({
        products: res.data,
        isLoaded: true
      });
    });
  }

  render() {
    if (!localStorage.getItem("sessionId")) {
      return <Redirect to="/registered-name" />;
    }
    const { isLoaded, products } = this.state;
    if (isLoaded === false) {
      return <div className="ShoppingPage">Loading...</div>;
    }

    if (products.length === 0) {
      return <div className="ShoppingPage">No have product</div>;
    }
    return (
      <div className="ShoppingPage">
        <div>There are ${products.length} products</div>
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            title={product.title}
            bookCover={product.bookCover}
            price={product.price}
            total={product.total}
          />
        ))}
      </div>
    );
  }
}
