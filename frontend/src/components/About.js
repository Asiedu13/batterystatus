import React, { Component } from "react";
import Header from "./Header";
import Person from "./Person";
import image1 from "../pics/10-Challenges-Each-Teen-Boy-Will-Face-Before-Graduating-High-School.jpg";
import image2 from '../pics/boy-smiling.jpg'
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Header label="About Us" />
        <div className="founders">
          <Person image={image1} alt="boy" name="Mr. Gordon Ramsay" pos="Chief Executive Officer" />
          <Person image={image2} alt="boy" name="Mr. Denver Moscow" pos="Partner" />
          
        </div>
      </div>
    );
  }
}
