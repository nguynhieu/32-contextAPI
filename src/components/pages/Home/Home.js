import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import "./Home.css";

export default class HomePage extends Component {
  render() {
    if (!localStorage.getItem("sessionId")) {
      return <Redirect to="/registered-name" />;
    }
    return <div className="HomePage">Home page</div>;
  }
}
