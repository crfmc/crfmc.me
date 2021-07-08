import React, { Component } from "react";
import "../styles/Project.css";
import "../styles/Webdev.css";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show_image: 1,
  };

  next_image() {
    this.setState({
      show_image: this.state.show_image < 3 ? this.state.show_image + 1 : 1,
    });
  }

  last_image() {
    this.setState({
      show_image: this.state.show_image > 1 ? this.state.show_image - 1 : 3,
    });
  }

  render() {
    if (this.props.size === "small") {
      if (this.state.show_image === 1) {
        return (
          <div className="full_project_container">
            <div className="project">
              <div className="project_description_container">
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
              </div>
              <div className="project_image_container">
                <div className="full_screen_img">
                  <img src={this.props.image1} alt="" />
                </div>
              </div>
            </div>
            <div className="arrows">
              <button onClick={() => this.last_image()} className="last_image">
                &larr;
              </button>
              <button onClick={() => this.next_image()} className="next_image">
                &rarr;
              </button>
            </div>
          </div>
        );
      }
      if (this.state.show_image === 2) {
        return (
          <div className="full_project_container">
            <div className="project">
              <div className="project_description_container">
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
              </div>
              <div className="project_image_container">
                <div className="full_screen_img">
                  <img src={this.props.image2} alt="" />
                </div>
              </div>
            </div>
            <div className="arrows">
              <button onClick={() => this.last_image()} className="last_image">
                &larr;
              </button>
              <button onClick={() => this.next_image()} className="next_image">
                &rarr;
              </button>
            </div>
          </div>
        );
      } else
        return (
          <div className="full_project_container">
            <div className="project">
              <div className="project_description_container">
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
              </div>
              <div className="project_image_container">
                <div className="full_screen_img">
                  <img src={this.props.image3} alt="" />
                </div>
              </div>
            </div>
            <div className="arrows">
              <button onClick={() => this.last_image()} className="last_image">
                &larr;
              </button>
              <button onClick={() => this.next_image()} className="next_image">
                &rarr;
              </button>
            </div>
          </div>
        );
    } else {
      if (this.state.show_image === 1) {
        return (
          <div className="full_project_container">
            <div
              className="project"
              style={{
                backgroundImage: `url(${this.props.background})`,
              }}
            >
              <div className="project_image_container">
                <div className="full_screen_img">
                  <img src={this.props.image1} alt="" />
                </div>
                <button
                  onClick={() => this.last_image()}
                  className="last_image"
                >
                  &larr;
                </button>
                <button
                  onClick={() => this.next_image()}
                  className="next_image"
                >
                  &rarr;
                </button>
              </div>
              <div className="project_description_container">
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
              </div>
            </div>
          </div>
        );
      }
    }
    if (this.state.show_image === 2) {
      return (
        <div className="full_project_container">
          <div
            className="project"
            style={{
              backgroundImage: `url(${this.props.background})`,
            }}
          >
            <div className="project_image_container">
              <div className="full_screen_img">
                <img src={this.props.image2} alt="" />
              </div>
              <button onClick={() => this.last_image()} className="last_image">
                &larr;
              </button>
              <button onClick={() => this.next_image()} className="next_image">
                &rarr;
              </button>
            </div>
            <div className="project_description_container">
              <h1>{this.props.title}</h1>
              <h3>{this.props.description}</h3>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="full_project_container">
          <div
            className="project"
            style={{
              backgroundImage: `url(${this.props.background})`,
            }}
          >
            <div className="project_image_container">
              <div className="full_screen_img">
                <img src={this.props.image3} alt="" />
              </div>
              <button onClick={() => this.last_image()} className="last_image">
                &larr;
              </button>
              <button onClick={() => this.next_image()} className="next_image">
                &rarr;
              </button>
            </div>
            <div className="project_description_container">
              <h1>{this.props.title}</h1>
              <h3>{this.props.description}</h3>
            </div>
          </div>
        </div>
      );
  }
}
