import React, {Component} from "react";
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import resume from "../files/resume.pdf";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="site-navigation">
          <div className="nav-icon">
            <Link to="/home">
              <FontAwesome name="home" />
            </Link>
            <p>Home</p>
          </div>
          <div className="nav-icon">
            <Link to="/education">
              <FontAwesome name="graduation-cap" />
            </Link>
            <p>Education</p>
          </div>
          <div className="nav-icon">
            <Link to="/skills">
              <FontAwesome name="code" />
            </Link>
            <p>Skills</p>
          </div>
          <div className="nav-icon">
            <Link to="/projects">
              <FontAwesome name="cubes" />
            </Link>
            <p>Projects</p>
          </div>
          <div className="nav-icon">
            <Link to="/experience">
              <FontAwesome name="briefcase" />
            </Link>
            <p>Work</p>
          </div>
          <div className="nav-icon">
            <Link to="/contact">
              <FontAwesome name="envelope" />
            </Link>
            <p>Contact</p>
          </div>
        </nav>
        <nav className="files">
          <div className="nav-icon">
            <a href={resume} target="_blank">
              <FontAwesome name="file" />
            </a>
            <p>Resume</p>
          </div>
        </nav>
        <nav className="social-profiles">
          <div className="nav-icon">
            <a href="https://github.com/haritha2112" target="_blank">
              <FontAwesome name="github" />
            </a>
            <p>Github</p>
          </div>
          <div className="nav-icon">
            <a href="https://linkedin.com/in/haritharathinakumar2161825" target="_blank">
              <FontAwesome name="linkedin" />
            </a>
            <p>Linkedin</p>
          </div>
        </nav>
      </div>
    )
  }
}
