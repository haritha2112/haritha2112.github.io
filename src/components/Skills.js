import React, {Component} from "react";
import FontAwesome from "react-fontawesome";
import html5Logo from "../images/html5-logo.png";
import css3Logo from "../images/css3-logo.png";
import javascriptLogo from "../images/javascript-logo.svg";
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
import sassLogo from "../images/sass-logo.png";
import uikitLogo from "../images/uikit-logo.svg";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: "Bootstrap",
          image: bootstrapLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "Chai.js",
          image: chaiLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "C++",
          image: cppLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "CSS3",
          image: css3Logo,
          radius: 40,
          color: "#fff"
        }, {
          name: "Git",
          image: gitLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "HTML5",
          image: html5Logo,
          radius: 40,
          color: "#fff"
        }, {
          name: "Adobe Indesign",
          image: indesignLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "JavaScript",
          image: javascriptLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "Jira",
          image: jiraLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "Mocha",
          image: mochaLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "MySQL",
          image: mysqlLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "PHP",
          image: phpLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "React.js",
          image: reactLogo,
          radius: 40,
          color: "#404040"
        }, {
          name: "Redux",
          image: reduxLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "Sass",
          image: sassLogo,
          radius: 40,
          color: "#fff"
        }, {
          name: "UIKit",
          image: uikitLogo,
          radius: 40,
          color: "#404040"
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
      return -d.radius + (d.radius / 2) - 5;
    }).attr("y", (d) => {
      return -d.radius + (d.radius / 2) - 5;
    }).attr("width", (d) => {
      return d.radius + 10;
    }).attr("height", (d) => {
      return d.radius + 10;
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
          As an aspiring Front-End / UI / UX developer, I have always strived
          to stay up to date with the technological trends in these fields. I
          am skilled at designing responsive websites that conform to the
          ADA web accessibilty guidelines using HTML5, CSS3, JavaScript and
          a wide range of JavaScript libraries that are used for building and
          testing web applications. Additionally, I have some experience
          working with CSS pre-processors and front-end frameworks. I have
          also acquired experience in full-stack developement using the
          LAMP Stack.
          <br/><br/>
          Go ahead. Play around with my skills below.
          &nbsp;<FontAwesome name="hand-peace-o" />
        </div>
      </div>
      <div id="skills-chart" className="chart"></div>
    </div>
    )
  }
}
