import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div>
        <div className="person">
          <img src={this.props.image} alt={this.props.alt} srcset="" />
          <div className="person__desc">
            <h3 className="person__desc__name"> {this.props.name} </h3>
            <p className="person__desc__position"> {this.props.pos} </p>
          </div>
        </div>
      </div>
    );
  }
}
