import React, {Component} from "react";
import {HashRouter, Route, Redirect} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          <NavBar />
          <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
    </HashRouter>
    )
  }
}
