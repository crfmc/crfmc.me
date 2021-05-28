import React, { Component } from "react";
// import header from "../header.jpg";
import logo from "../personal_logo_transparent.png";
import About from "../components/About.js";
import Webdev from "../screens/Webdev";
import Footer from "../components/Footer.js";
import mail from "../icons/email.svg";
import face from "../icons/face.svg";
import idea from "../icons/idea.svg";
import top2 from "../icons/top2.svg";
import "../styles/Landing.css";
import tree from "../tree.png";
import avi from "../avi.jpg";

export default class Landing extends Component {
  // constructor(props) {
  //   super(props);
  // }

  //

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    const banner = new Image();
    // banner.src = header.fileName;
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  //

  // state = {
  //   showAbout: false,
  // };

  // show_about = () => {
  //   this.setState({
  //     showAbout: true,
  //   });
  // };

  // hide_about = () => {
  //   this.setState({
  //     showAbout: false,
  //   });
  // };

  render() {
    if (this.state.windowWidth < 426) {
      return (
        <>
          <div className="header">
            <div className="mini_banner">
              <div className="logo_container">
                <img src={logo} className="logo" alt="Cesar's logo" />
              </div>
              <div className="mini_banner_name">
                <h4></h4>
              </div>
            </div>
            <div className="introduction">
              <h2 className="hello">Hello.</h2>
              <h2 className="my_name">My name is Cesar.</h2>
              <div className="i_am">
                <h2 className="i_am_a">I am a Web Developer.</h2>
              </div>
            </div>
            <div className="avi_container">
              <img src={avi} />
            </div>
          </div>

          <div id="about">
            <About size="small" />
          </div>
          <div id="workpage">
            <Webdev size="small" />
          </div>
          <div id="footer">
            <Footer size="small" />
          </div>
          <div className="bottom_nav">
            <a href="#top">
              <img src={top2} />
            </a>
            <a href="#about">
              <img src={face} />
            </a>
            <a href="#workpage">
              <img src={idea} />
            </a>
            <a href="#footer">
              <img src={mail} />
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="header wrapper"
            style={{
              // backgroundImage: `${header})`,
            }}
          >
            <div className="bar">
              <div className="logo_container">
                <a href="./">
                  <img src={logo} className="logo" alt="Cesar's logo" />
                </a>
              </div>
              <a href="#about" className="about">
                <p>About</p>
              </a>
              <a href="#footer" className="contact">
                <p>Contact</p>
              </a>
            </div>
            <div className="introduction">
              <h2 className="hello">Hello.</h2>
              <h2 className="my_name">My name is Cesar.</h2>
              <div className="i_am">
                <h2 className="i_am_a">I am a Web Developer</h2>
                {/* <select className="i_am_selector">
                <option>Web Developer</option>
                <option>Writer</option>
                <option>Listener</option>
                <option>Athlete</option>
              </select> */}
              </div>
            </div>
            <div className="arrow_container">
              <a href="#about" className="arrow">
                &darr;
              </a>
            </div>
          </div>
          <div id="about">
            <About />
          </div>
          <div id="workpage">
            <Webdev />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </>
      );
    }
  }
}
