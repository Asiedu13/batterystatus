import React, { Component } from "react";
import Battery from './Btt/Battery';
import Desc from './Btt/Desc'
export default class Main extends Component {
  render() {
    return (
      <section className="main">
       

        {/* The battery description */}
        <Battery />
        <Desc/>
       
      </section>
    );
  }
}
