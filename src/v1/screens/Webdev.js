import React, { Component } from "react";
import Project from "../components/Project";
import idea from "../icons/idea.svg";
import ProjectTile from "../components/ProjectTile";
import bricklayer_home from "../webexamples/bricklayer_home.jpeg";
import bricklayer_build from "../webexamples/bricklayer_build.jpeg";
import bricklayer_pricing from "../webexamples/bricklayer_pricing.jpeg";
import gif1 from "../webexamples/angry_computer.gif";
import poems from "../webexamples/poems.pdf";
import quarantine_cuisine from "../webexamples/quarantine_cuisine_expand.pdf";
import background1 from "../webexamples/portfolio_background1.jpg";
import background2 from "../webexamples/portfolio_background2.jpg";
import "../styles/Webdev.css";
import banner from "../images/header.jpg";
import swivel_black_1 from "../swivels/swivel_black_1.jpg";
import swivel_black_2 from "../swivels/swivel_black_2.jpg";
import swivel_black_3 from "../swivels/swivel_black_3.jpg";
import swivel_red_1 from "../swivels/swivel_red_1.jpg";
import swivel_red_2 from "../swivels/swivel_red_2.jpg";
import swivel_red_3 from "../swivels/swivel_red_3.jpg";
import planetX1 from "../project_files/planetX1.gif";
import planetX2 from "../project_files/planetX2.gif";
import planetX3 from "../project_files/planetX3.gif";
import paint1 from "../project_files/paint1.gif";
import paint2 from "../project_files/paint2.gif";
import paint3 from "../project_files/paint3.gif";
import sewer1 from "../project_files/sewer1.gif";
import sewer2 from "../project_files/sewer2.gif";
import sewer3 from "../project_files/sewer3.gif";

export default class Webdev extends Component {
  render() {
    if (this.props.size === "small") {
      return (
        <>
          <div className="projects_title">
            <img src={idea} />
            <h1 className="projects_title_text">Projects</h1>
            <h2 className="projects_title_subtext1">
              Below are some of the projects I've worked on recently.
            </h2>
            <h2 className="projects_title_subtext1">
              They are a mix of website designs and individual programming
              projects.
            </h2>
            <h2 className="projects_title_subtext2">
              Click on the white arrows and scroll down on the gray monitors to
              see examples.
            </h2>
          </div>
          <Project
            size="small"
            image1={bricklayer_home}
            image2={bricklayer_build}
            image3={bricklayer_pricing}
            title="Bricklayer"
            description="Bricklayer is a website aimed at student artists in need of a place to store their projects. Its development consisted of a
              thoroughly documented design process, user testing, and a simple frontend
              implementation."
          />
          <Project
            size="small"
            image1={planetX1}
            image2={planetX2}
            image3={planetX3}
            title="Planet X"
            description="Planet X uses Dijkstra's shortest path algorithm to find and rescue a stranded ship on a random planet in the galaxy. It chooses a path that allows it to collect the greatest number of minerals on the planets on the way back."
          />
          <Project
            size="small"
            image1={paint1}
            image2={paint2}
            image3={paint3}
            title="Paint"
            description="Paint is a graphical user interface whose functionality includes freehand drawing and erasing, airbrushing, file editing, color recognition, and a line tool."
          />
          <Project
            size="small"
            image1={sewer1}
            image2={sewer2}
            image3={sewer3}
            title="Sewer Diver"
            description="Sewer Diver makes use of a breadth first search algorithm to find the maximum amount of coins possible within the allotted number of steps."
          />
        </>
      );
    }
    return (
      <>
        <div className="projects_title">
          <img src={idea} />
          <h1 className="projects_title_text">Projects</h1>
          <h2 className="projects_title_subtext1">
            Below are some of the projects I've worked on recently.
          </h2>
          <h2 className="projects_title_subtext1">
            They are a mix of website designs and individual programming
            projects.
          </h2>
          <h2 className="projects_title_subtext">
            Click on the white arrows and scroll down on the gray monitors to
            see examples.
          </h2>
        </div>
        <Project
          image1={bricklayer_home}
          image2={bricklayer_build}
          image3={bricklayer_pricing}
          title="Bricklayer"
          description="Bricklayer is a website aimed at student artists in need of a place to store their projects. Its development consisted of a
              thoroughly documented design process, user testing, and a simple frontend
              implementation."
          background={swivel_black_3}
        />
        <Project
          image1={planetX1}
          image2={planetX2}
          image3={planetX3}
          title="Planet X"
          description="Planet X uses Dijkstra's shortest path algorithm to find and rescue a stranded ship on a random planet in the galaxy. It chooses a path that allows it to collect the greatest number of minerals on the planets on the way back."
          background={swivel_red_3}
        />
        <Project
          image1={paint1}
          image2={paint2}
          image3={paint3}
          title="Paint"
          description="Paint is a graphical user interface whose functionality includes freehand drawing and erasing, airbrushing, file editing, color recognition, and a line tool."
          background={background2}
        />
        <Project
          image1={sewer1}
          image2={sewer2}
          image3={sewer3}
          title="Sewer Diver"
          description="Sewer Diver makes use of a breadth first search algorithm to find the maximum amount of coins possible within the allotted number of steps."
          background={swivel_red_1}
        />
      </>
    );
  }
}
