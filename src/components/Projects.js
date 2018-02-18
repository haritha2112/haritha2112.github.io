import React, {Component} from "react";
import netflixImg from "../images/netflix-logo.png";
import metubeImg from "../images/metube.jpg";
import personalPortfolioImg from "../images/personal-portfolio.jpg";
import myClemsonImg from "../images/myclemson-logo.png";
import memoryGameImg from "../images/memory-game.png";
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
        false
      ],
      projects: [
        {
          name: "Netflix Simulator",
          description: "A Netflix like application for TV show trailers. It allows users to search for TV shows, view and rate them.",
          techStack: "HTML5 | CSS3 | Sass | React.js",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+netflixImg+")"
        }, {
          name: "MeTube",
          description: "A dynamic multimedia web application that mimics primary YouTube features. It includes features such as multimedia file upload, download, view, rate, comment, favorite, user account creation, chat, add contacts and group discussions.",
          techStack: "LAMP Stack | HTML5 | Bootstrap",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+metubeImg+")"
        }, {
          name: "Personal Portfolio",
          description: "Designed this personal portfolio website to showcase my work-experience and skills.",
          techStack: "HTML5 | CSS3 | SVG | React.js | Sass",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+personalPortfolioImg+")"
        }, {
          name: "MyClemson App",
          description: "Performed usability studies on Clemson University’s MyClemson mobile application. Designed a prototype using the results of the study which, based on a survey of 120 people, will improve the user experience on the app.",
          techStack: "Human Centered Computing | Adobe InDesign",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+myClemsonImg+")"
        }, {
          name: "Memory Game",
          description: "A browser-based card matching game similar to Pairs - the classic playing card game.",
          techStack: "HTML5 | CSS3 | JavaScript",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+memoryGameImg+")"
        }, {
          name: "Flashcards",
          description: "A web application for vocabulary flashcards. Allows users to create cards, organize them into decks, and run practice sessions.",
          techStack: "Django | HTML5 | CSS3 | JavaScript",
          backgroungImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+flashcardsImg+")"
        }
      ]
    }
    this.getClickStatus = this.getClickStatus.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(projectIndex) {
    let nextClickStatus = [false, false, false, false, false, false];
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
