import React from "react";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";

class FormElement extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          placeholder={this.props.description}
          onChange={this.props.onChange} // même chose que event => { this.props.onChange(event)}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default FormElement;
