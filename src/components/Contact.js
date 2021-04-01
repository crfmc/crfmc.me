import React, { Component } from "react";
import "../styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact_container">
        <a href={this.props.link}>
          <img src={this.props.icon} />
        </a>
        <h3>{this.props.value}</h3>
      </div>
    );
  }
}
