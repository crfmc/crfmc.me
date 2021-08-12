import React, { Component } from "react";
import "../styles/About.css";
import face from "../icons/face.svg";
import tree from "../images/tree.png";
import sun from "../images/cornell_sun.jpg";

export default class About extends Component {
  render() {
    if (this.props.size === "small") {
      return (
        <div>
          <div className="about_container">
            <img src={face} />
            <h1 className="about_title_text">About</h1>
            {/* <div className="about_top">
              <h2>I am a first generation college student from Lima, Peru.</h2>
            </div> */}
            <div className="activities_container">
              <div className="education">
                <h2 className="about_title_subtext1">
                  I am currently a senior majoring in English and Information
                  Science at Cornell University's College of Arts &amp;
                  Sciences.
                </h2>
                <img className="tree" src={tree} alt="" />
              </div>
              <div className="work">
                <h2 className="about_title_subtext1">
                  As part of{" "}
                  <a href="http://specials.cornellsun.com">
                    The Cornell Daily Sun's Web Team
                  </a>{" "}
                  I help create experimental material and maintain the
                  newspaper's website. I spend the most time working in React.
                </h2>
                <img className="sun" src={sun} alt="" />
              </div>
            </div>
            <div className="about_bottom">
              <h2>I am a first generation college student from Lima, Peru.</h2>
            </div>
            {/* <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
            example
          </a> */}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="about_container">
            <img src={face} />
            <h1 className="about_title_text">About</h1>
            {/* <div className="about_top">
              <h2>I am a first generation college student from Lima, Peru.</h2>
            </div> */}
            <div className="activities_container">
              <div className="education">
                <h1 className="about_subheader">Life</h1>
                <h2 className="about_title_subtext1">
                  I am currently a senior majoring in English and Information
                  Science at Cornell University's College of Arts &amp;
                  Sciences.
                </h2>
                <img className="tree" src={tree} alt="" />
              </div>
              <div className="work">
                <h1 className="about_subheader">Work</h1>
                <h2 className="about_title_subtext1">
                  As part of{" "}
                  <a href="http://specials.cornellsun.com">
                    The Cornell Daily Sun's Web Team
                  </a>{" "}
                  I help create experimental material and maintain the
                  newspaper's website. I spend the most time working in React.
                </h2>
                <img className="sun" src={sun} alt="" />
              </div>
            </div>
            <div className="about_bottom">
              <h2>I am a first generation college student from Lima, Peru.</h2>
            </div>
            {/* <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
            example
          </a> */}
          </div>
        </div>
      );
    }
  }
}
