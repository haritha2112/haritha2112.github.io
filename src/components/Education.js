import React, {Component} from "react";
import Timeline from "./Timeline";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Front-End Web Developer Nanodegree | Udacity",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
          startDate: "1 Jan 2018",
          endDate: "Current",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url("+"'https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a'"+") center center no-repeat"
        },
        {
          title: "Masters Degree | Clemson University",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
          startDate: "1 Jan 2018",
          endDate: "1 Jan 2018",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url("+"'https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a'"+") center center no-repeat"
        },
        {
          title: "Bachelors Degree | SRM University",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
          startDate: "1 Jan 2018",
          endDate: "1 Jan 2018",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url("+"'https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a'"+") center center no-repeat"
        },
        {
          title: "Schooling | P.S Senior Secondary School",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
          startDate: "1 Jan 2018",
          endDate: "1 Jan 2018",
          image: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url("+"'https://hd.unsplash.com/photo-1466840787022-48e0ec048c8a'"+") center center no-repeat"
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
