import React, {Component} from "react";
import Timeline from "./Timeline";
import clemsonImage from "../images/clemson-university.jpg";
import srmImage from "../images/srm-university.jpg";
import udacityImage from "../images/udacity.png";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Front-End Web Developer Nanodegree | Udacity",
          description: "I am currently enrolled in this fun course which has not only helped me learn the latest tools and techniques for Front-End Development but has also taught me how to follow best-practices and code according to industry standards.",
          startDate: "21 Dec 2017",
          endDate: "Current",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+udacityImage+"')"
        },
        {
          title: "Master's Degree | Clemson University",
          description: "Clemson University has served as a strong platform to help me realise my dreams of becoming a software developer. I have had the opportunity to learn from some of the brightest minds working in this field and will be graduating in May 2018.",
          startDate: "17 Aug 2016",
          endDate: "10 May 2018",
          descriptionHighlight: "CGPA - 3.48",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+clemsonImage+"')"
        },
        {
          title: "Bachelor's Degree | SRM University",
          description: "My undergraduate education at SRM University exposed me to the numerous fields that Software Engineering encompasses. It was here that my fascination for web development began when I created my first web-application - an online eBook reader. I recall spending hours working on perfecting the design and aesthetics of the website.",
          startDate: "8 Aug 2012",
          endDate: "28 May 2016",
          descriptionHighlight: "CGPA - 3.72",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url('"+srmImage+"')"
        }
      ]
    }
  }

  render() {
    return (
      <div className="main-content education">
        <Timeline data={this.state.data} icon="graduation-cap" />
      </div>
    )
  }
}
