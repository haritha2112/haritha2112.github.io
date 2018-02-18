import React, {Component} from "react";
import Timeline from "./Timeline";
import nbrcImage from "../images/national-bricks-research-center.jpg";
import artDotComImage from "../images/art-dot-com.jpg";
import ongcImage from "../images/ongc.jpg";

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Full Stack Developer | National Bricks Research Center",
          description: "I am currently working here as a part-time full stack developer. I am working on adding additional functionality and revamping their existing system that is built on the LAMP stack. As the sole developer, I am fully responsible designing and implementing features to help the researchers perform their day to day tasks with ease.",
          startDate: "15 Jan 2018",
          endDate: "Current",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+nbrcImage+"')"
        },
        {
          title: "Web Developer Intern | ART.COM",
          description: "I worked as web developer intern at this California based company. During my time here, I got the opportunity to participate in their on-going agile development activities and implemented several features to enhance the user-experience on their mobile platform. It was here that learnt about various modern tools that are part of the current web development ecosystem such as React.js, Webpack, Stylus, Mocha, Chai etc.",
          startDate: "5 Jun 2017",
          endDate: "18 Aug 2017",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+artDotComImage+"')"
        },
        {
          title: "Trainee | Oil and Natural Gas Corporation of India",
          description: "It was a very memorable experience working at ONGC as this was the first time I worked with a team of industrial professionals. I got the oppertunity to work with the Info-Com department here, where I designed a dynamic Organogram (A flowchart-like visualization of the organization's hierarchy) for them. The tool was built on the LAMP stack.",
          startDate: "8 Dec 2014",
          endDate: "26 Dec 2014",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+ongcImage+"')"
        }
      ]
    }
  }

  render() {
    return (
      <div className="main-content experience">
        <Timeline data={this.state.data} icon="briefcase" />
      </div>
    )
  }
}
