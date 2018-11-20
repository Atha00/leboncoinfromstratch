import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./containers/SignIn";
import Home from "./containers/Home";
import LogIn from "./containers/LogIn";
import "./App.css";

class App extends Component {
  state = {
    user: {
      _id: Cookies.get("_id") || "",
      username: Cookies.get("username") || "",
      token: Cookies.get("token") || ""
    }
  };

  logIn = user => {
    Cookies.set("_id", user._id);
    Cookies.set("username", user.username);
    Cookies.set("token", user.token);

    this.setState({ user: user });
  };

  logOut = user => {
    Cookies.remove("_id");
    Cookies.remove("username");
    Cookies.remove("token");

    this.setState({
      user: {
        _id: "",
        username: "",
        token: ""
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Fragment>
          <div>
            <Route
              exact={true}
              path="/"
              render={props => <Home {...props} user={user} />}
            />
            <Route
              path="/sign_in"
              render={props => (
                <SignIn {...props} user={user} logIn={this.logIn} />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <LogIn {...props} user={user} logIn={this.logIn} />
              )}
            />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
