import React from "react";

export const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  componentDidMount() {
    const username = localStorage.getItem("username");

    if (username) {
      this.setState({
        currentUser: username
      });
    }
  }

  getCurrentUser() {
    const username = localStorage.getItem("username");
    console.log(username);

    if (username) {
      this.setState({
        currentUser: username
      });
    }
  }

  render() {
    return (
      <CurrentUserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          getCurrentUser: this.getCurrentUser
        }}
      >
        {this.props.children}
      </CurrentUserContext.Provider>
    );
  }
}
