import React from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import FormElement from "../../components/FormElement";
import "./style.css";

class SignIn extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  //   onChange = event => {
  //     const value = event.target.value;
  //     this.setState({ [event.target.name]: value });
  //   };

  onChange = event => {
    const element = event.target.name;
    this.setState(
      {
        user: { ...this.state.user, [element]: event.target.value }
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
        email: this.state.user.email,
        username: this.state.user.username,
        password: this.state.password
      })
      .then(response => {
        console.log("response.data", response.data);
        this.props.logIn({
          _id: response.data._id,
          token: response.data.token,
          username: response.data.account.username
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Créez un compte</h2>
        <div>
          <form onSubmit={this.onSubmit}>
            <FormElement
              type="text"
              label="Pseudo"
              description="Votre pseudo"
              onChange={this.onChange}
              name="username"
              value={this.state.user.username}
            />
            <FormElement
              type="text"
              label="Adresse email"
              description="random@wanadoo.fr"
              onChange={this.onChange}
              name="email"
              value={this.state.user.email}
            />
            <FormElement
              type="password"
              label="Mot de passe"
              description="********"
              onChange={this.onChange}
              name="password"
              value={this.state.user.password}
            />
            <FormElement
              type="password"
              label="Confirmer le mot de passe"
              description="********"
              onChange={this.onChange}
              name="confirmPassword"
              value={this.state.user.confirmPassword}
            />
            <button type="submit">Valider</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
