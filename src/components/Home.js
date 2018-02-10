import React, {Component} from "react";
import {DreamCatcher1, DreamCatcher2} from "./SVGArt/DreamCatcher";
import displayPicture from "../images/dp.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <DreamCatcher1/>
        <DreamCatcher2/>
        <div className="content">
          <div className="salutation">
            Hi, <br/> I'm Haritha
          </div>
          <div className="display-picture">
            <img src={displayPicture} />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    )
  }
}
