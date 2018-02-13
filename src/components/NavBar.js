import React, {Component} from "react";
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import resume from "../files/resume.pdf";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.getNavbarStatus = this.getNavbarStatus.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }

  closeNavbar() {
    this.setState({
      navbarOpen: false
    });
  }

  getNavbarStatus() {
    return this.state.navbarOpen ? "open" : "closed";
  }

  render() {
    return (
      <div className="navbar">
        <nav className="collapse-button">
          <div className="nav-icon" onClick={() => this.toggleNavbar()}>
            <FontAwesome name="bars" />
          </div>
        </nav>
        <nav className={"site-navigation " + this.getNavbarStatus()}>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/home">
              <FontAwesome name="home" />
            </Link>
            <p>Home</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/education">
              <FontAwesome name="graduation-cap" />
            </Link>
            <p>Education</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/skills">
              <FontAwesome name="code" />
            </Link>
            <p>Skills</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/projects">
              <FontAwesome name="cubes" />
            </Link>
            <p>Projects</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/experience">
              <FontAwesome name="briefcase" />
            </Link>
            <p>Work</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <Link to="/contact">
              <FontAwesome name="envelope" />
            </Link>
            <p>Contact</p>
          </div>
        </nav>
        <nav className={"files " + this.getNavbarStatus()}>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <a href={resume} target="_blank">
              <FontAwesome name="file" />
            </a>
            <p>Resume</p>
          </div>
        </nav>
        <nav className={"social-profiles " + this.getNavbarStatus()}>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
            <a href="https://github.com/haritha2112" target="_blank">
              <FontAwesome name="github" />
            </a>
            <p>Github</p>
          </div>
          <div className="nav-icon" onClick={() => this.closeNavbar()}>
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
