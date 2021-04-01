import React, { Component } from "react";
import "../styles/Footer.css";
import avi from "../avi.jpg";
import Contact from "../components/Contact";
import email from "../icons/email.svg";
import github from "../icons/github.png";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";

export default class Footer extends Component {
  render() {
    if (this.props.size === "small") {
      return (
        <>
          <div className="footer_container">
            <h1>Let's get in touch.</h1>
            <div className="final_comments">
              <p className="final_comment_1">
                Is your team looking for a programmer? A website revamp? ...A
                friend?
              </p>
              <p className="final_comment_2">
                I am constantly looking for challenging new projects.
              </p>
              <p className="final_comment_3">Contact me by any means below!</p>
            </div>
            {/* <h2>Connect with me through any of the means available below</h2> */}
            <div className="contacts">
              <Contact
                icon={email}
                value="Email"
                link="mailto:crf85@cornell.edu"
              />
              <Contact
                icon={linkedin}
                value="LinkedIn"
                link="https://www.linkedin.com/in/cesarferreyramansilla"
              />
              <Contact
                icon={github}
                value="Github"
                link="https://github.com/crfmc"
              />
              <Contact
                icon={instagram}
                value="Instagram"
                link="https://www.instagram.com/crfmc_ig/"
              />
            </div>
            <p
              style={{
                backgroundColor: "black",
                fontSize: "16px",
                padding: "2%",
                color: "white",
                marginBottom: "57px",
              }}
            >
              Copyright © All Rights Reserved
              <br /> by Cesar Ferreyra-Mansilla
            </p>
          </div>
        </>
      );
    } else {
      return (
        <div className="footer_container">
          <h1>Let's get in touch.</h1>
          <img
            src={avi}
            style={{
              width: "10%",
              alignSelf: "center",
              borderRadius: "65px",
              borderWidth: "5px",
              borderColor: "black",
              borderStyle: "solid",
            }}
          />
          <div className="final_comments">
            <p className="final_comment_1">
              Is your team looking for a programmer? A website revamp? ...A
              friend?
            </p>
            <p className="final_comment_2">
              I am constantly looking for challenging new projects.
            </p>
            <p className="final_comment_3">Contact me by any means below!</p>
          </div>
          {/* <h2>Connect with me through any of the means available below</h2> */}
          <div className="contacts">
            <Contact
              icon={email}
              value="Email"
              link="mailto:crf85@cornell.edu"
            />
            <Contact
              icon={linkedin}
              value="LinkedIn"
              link="www.linkedin.com/in/cesarferreyramansilla"
            />
            <Contact
              icon={github}
              value="Github"
              link="https://github.com/crfmc"
            />
            <Contact
              icon={instagram}
              value="Instagram"
              link="https://www.instagram.com/crfmc_ig/"
            />
          </div>
          <p
            style={{
              backgroundColor: "black",
              padding: "2%",
              color: "white",
              marginBottom: "0",
            }}
          >
            Copyright © All Rights Reserved by Cesar Ferreyra-Mansilla
          </p>
        </div>
      );
    }
  }
}
