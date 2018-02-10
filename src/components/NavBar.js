import React, {Component} from "react";
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-icon">
            <Link to="/home">
              <FontAwesome name="home" />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/education">
              <FontAwesome name="graduation-cap" />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/skills">
              <FontAwesome name="code" />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/projects">
              <FontAwesome name="cubes" />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/experience">
              <FontAwesome name="briefcase" />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/contact">
              <FontAwesome name="envelope" />
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}
