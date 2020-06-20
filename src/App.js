// Server: https://codesandbox.io/s/blazing-moon-t5xgx?file=/db.json

import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import ShoppingPage from "./components/pages/Shopping/Shopping";
import HomePage from "./components/pages/Home/Home";
import CartPage from "./components/pages/Cart/Cart";
import RegisteredNamePage from "./components/pages/RegisteredName/RegisteredName";

import { CartProvider } from "./contexts/Cart";
import { CurrentUserProvider } from "./contexts/CurrentUser";

export default function App() {
  return (
    <CurrentUserProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar />
            <div className="Container">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/shopping">
                  <ShoppingPage />
                </Route>
                <Route path="/cart">
                  <CartPage />
                </Route>
                <Route path="/registered-name">
                  <RegisteredNamePage />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </CartProvider>
    </CurrentUserProvider>
  );
}
