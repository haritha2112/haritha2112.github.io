import React, {Component} from "react";
import html5Logo from "../images/html5-logo.png";
import css3Logo from "../images/css3-logo.png";
import javascriptLogo from "../images/javascript-logo.jpg";
import bootstrapLogo from "../images/bootstrap-logo.png";
import chaiLogo from "../images/chai-logo.png";
import cppLogo from "../images/cpp-logo.png";
import gitLogo from "../images/git-logo.png";
import indesignLogo from "../images/indesign-logo.png";
import jiraLogo from "../images/jira-logo.png";
import mochaLogo from "../images/mocha-logo.png";
import mysqlLogo from "../images/mysql-logo.png";
import phpLogo from "../images/php-logo.png";
import reactLogo from "../images/react-logo.png";
import reduxLogo from "../images/redux-logo.png";
import uikitLogo from "../images/uikit-logo.jpg";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: "Bootstrap",
          image: bootstrapLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Chai.js",
          image: chaiLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "C++",
          image: cppLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "CSS3",
          image: css3Logo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Git",
          image: gitLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "HTML5",
          image: html5Logo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Adobe Indesign",
          image: indesignLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "JavaScript",
          image: javascriptLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Jira",
          image: jiraLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Mocha",
          image: mochaLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "MySQL",
          image: mysqlLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "PHP",
          image: phpLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "React.js",
          image: reactLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "Redux",
          image: reduxLogo,
          radius: 40,
          color: "#000000"
        }, {
          name: "UIKit",
          image: uikitLogo,
          radius: 40,
          color: "#000000"
        }
      ]
    }
    this.generateSkillsChart = this.generateSkillsChart.bind(this);
  }

  componentDidMount() {
    this.generateSkillsChart();
  }

  generateSkillsChart() {
    function collide(node) {
      var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
      return function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
          var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = node.radius + quad.point.radius;
          if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      };
    }

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      svg.attr("width", width).attr("height", height);
      force.size([width, height]).resume();
    }

    const data = [{name: "root"}].concat(this.state.skills);
    const root = data[0];
    root.radius = 0;
    root.fixed = true;

    const force = d3.layout.force().gravity(0.04).charge((d, i) => {
      return i ? 0 : -2000;
    }).nodes(data);
    force.start();

    const svg = d3.select("#skills-chart").append("svg");
    const node = svg.selectAll(".node").data(data.slice(1)).enter().append("g").attr("class", "node").call(force.drag);

    node.append("circle").data(data.slice(1)).attr("r", (d) => {
      return d.radius;
    }).style("fill", (d) => {
      return d.color;
    });
    node.append("image").data(data.slice(1)).attr("xlink:href", (d) => {
      return d.image;
    }).attr("x", (d) => {
      return -d.radius + (d.radius / 2);
    }).attr("y", (d) => {
      return -d.radius + (d.radius / 2);
    }).attr("width", (d) => {
      return d.radius;
    }).attr("height", (d) => {
      return d.radius;
    });

    resize();
    d3.select(window).on("resize", resize);
    svg.on("mousemove", function() {
      var p1 = d3.mouse(this);
      root.px = p1[0];
      root.py = p1[1];
      force.resume();
    });
    force.on("tick", function(e) {
      var q = d3.geom.quadtree(data),
        i = 0,
        n = data.length;
      while (++i < n)
        q.visit(collide(data[i]));
      node.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    });
  }

  render() {
    return (<div className="main-content skills">
      <div className="content">
        <div className="title">
          <span className="static-words">
            I'm a
          </span>
          <span className="braces">
            &nbsp;{"<"}&nbsp;&nbsp;
          </span>
          <div className="animated-words">
            <span>Front-End</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UI</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UX</span>
            <span>Full-Stack</span>
          </div>
          <span className="braces">
            &nbsp;&nbsp;/>&nbsp;
          </span>
          <span className="static-words">
            developer
          </span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div id="skills-chart" className="chart"></div>
    </div>
    )
  }
}
