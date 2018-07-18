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
            Hello!
          </div>
          <div className="display-picture">
            <img src={displayPicture} alt="Haritha's display picture" />
          </div>
          <div className="description">
            I am Haritha, a web developer. I am
            passionate about beautiful design and love building creative,
            elegant and user-friendly websites. <br/> <br/> I graduated this
            summer with a Master's degree in Computer Science and am
            looking for some awesome people to work with.
          </div>
        </div>
      </div>
    )
  }
}
