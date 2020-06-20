import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import "./RegisteredName.css";
import axios from "axios";

import { CurrentUserContext } from "../../../contexts/CurrentUser";

export default class RegisteredNamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: null,
      isRegistered: false
    };

    this.onChange = this.onChange.bind(this);
    this.getSessionId = this.getSessionId.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value,
      error: null
    });
  }

  getSessionId(cb) {
    if (this.state.name.length < 3) {
      this.setState({
        error: "Invalid value"
      });
      return;
    }

    axios
      .post("https://t5xgx.sse.codesandbox.io/get-session", {
        name: this.state.name
      })
      .then(res => {
        console.log(1);
        localStorage.setItem("sessionId", res.data.sessionId);
        localStorage.setItem("username", res.data.name);
        this.setState({
          isRegistered: true
        });
        cb();
      });
  }

  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/shopping" />;
    }

    if (localStorage.getItem("sessionId")) {
      return <Redirect to="/" />;
    }

    const { error } = this.state;
    return (
      <div className="RegisteredNamePage">
        <div className="RegisteredNamePage-action">
          {error && <div className="error">{error}</div>}
          <input placeholder="Your name" onChange={this.onChange} />
          <CurrentUserContext.Consumer>
            {({ getCurrentUser }) => (
              <button
                onClick={() => {
                  this.getSessionId(getCurrentUser);
                }}
              >
                Choose
              </button>
            )}
          </CurrentUserContext.Consumer>
        </div>
      </div>
    );
  }
}
