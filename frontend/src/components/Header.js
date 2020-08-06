import React, { PureComponent } from "react";

export default class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">{this.props.label}</h1>
        
      </div>
    );
  }
}
