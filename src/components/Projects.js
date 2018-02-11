import React, {Component} from "react";
import netflixImg from "../images/netflix-logo.png";
import metubeImg from "../images/metube.jpg";
import personalPortfolioImg from "../images/personal-portfolio.jpg";
import myClemsonImg from "../images/myclemson-logo.png";
import memoryGameImg from "../images/memory-game.jpg";
import flashcardsImg from "../images/flashcards.jpg";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isProjectClicked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      projects: [
        {
          name: "Netflix Simulator",
          description: "A web application that simulates Netflix experience by allowing users to watch TV show trailers. Includes features such as Search and Rating",
          techStack: "HTML5 | CSS3 | Sass | React.js",
          backgroungImage: "linear-gradient(rgba(139, 0, 0, 0.5), rgba(139, 0, 0, 0.5)), url("+netflixImg+")"
        }, {
          name: "MeTube",
          description: "A dynamic multimedia web application that mimics primary YouTube features. Includes features such as Multimedia file Upload/Download/View/Rate/Comment/Add to favorites; User account creation; Send/Receive messages; Add contacts; Group Discussions.",
          techStack: "LAMP Stack | HTML5 | Bootstrap",
          backgroungImage: "linear-gradient(rgba(72, 60, 50, 0.5), rgba(72, 60, 50, 0.5)), url("+metubeImg+")"
        }, {
          name: "Personal Portfolio",
          description: "Designed this personal portfolio website to showcase my work-experience and skills.",
          techStack: "HTML5 | CSS3 | SVG | React.js | Sass",
          backgroungImage: "linear-gradient(rgba(225, 98, 0, 0.5), rgba(225, 98, 0, 0.5)), url("+personalPortfolioImg+")"
        }, {
          name: "MyClemson App",
          description: "Performed usability studies on Clemson University’s “MyClemson” mobile application. Designed a prototype using the results of the study which, based on a survey of 120 people, will increase the UX quality from 76% to 83%.",
          techStack: "Human Centered Computing | Adobe InDesign",
          backgroungImage: "linear-gradient(rgba(131, 131, 131, 0.5), rgba(131, 131, 131, 0.45)), url("+myClemsonImg+")"
        }, {
          name: "Memory Game",
          description: "Currently working on building a browser-based card matching game.",
          techStack: "HTML5 | CSS3 | JavaScript",
          backgroungImage: "linear-gradient(rgba(0, 0, 114, 0.5), rgba(0, 0, 114, 0.5)), url("+memoryGameImg+")"
        }, {
          name: "Flashcards",
          description: "A web application for vocabulary flashcards",
          techStack: "Django | HTML5 | CSS3 | JavaScript",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("+flashcardsImg+")"
        }
      ]
    }
    this.getClickStatus = this.getClickStatus.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(projectIndex) {
    let nextClickStatus = [false, false, false, false, false, false, false, false];
    nextClickStatus[projectIndex] = !this.state.isProjectClicked[projectIndex];
    this.setState({
      isProjectClicked: nextClickStatus
    });
  }

  getClickStatus(projectIndex) {
    return this.state.isProjectClicked[projectIndex]
      ? "click"
      : "";
  }

  render() {
    return (
      <div className="main-content projects">
        {
          this.state.projects.map((project, index) => {
            return (
              <div className={"project " + this.getClickStatus(index)} onClick={() => this.toggleClick(index)}>
                <div className="flipper">
                  <div className="front" style={{"background-image": project.backgroungImage}}>
                    <p>{project.name}</p>
                  </div>
                  <div className="back">
                    <p className="description">{project.description}</p>
                    <p className="tech-stack">{project.techStack}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
