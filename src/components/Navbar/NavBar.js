import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/Cart";

import { CurrentUserContext } from "../../contexts/CurrentUser";

import "./NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <CurrentUserContext.Consumer>
          {({ currentUser }) =>
            currentUser && <li className="NavBar-CurrentUser">{currentUser}</li>
          }
        </CurrentUserContext.Consumer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <CurrentUserContext.Consumer>
          {({ currentUser }) =>
            !currentUser && (
              <li>
                <Link to="/registered-name">Registered</Link>
              </li>
            )
          }
        </CurrentUserContext.Consumer>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <CartContext.Consumer>
          {({ cartProduct }) => (
            <li>
              <Link to="/cart">Cart ({cartProduct.length})</Link>
            </li>
          )}
        </CartContext.Consumer>
      </div>
    );
  }
}
