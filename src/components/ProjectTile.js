import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show_image: 1,
  };

  next_image() {
    console.log(this.state);

    this.setState({
      show_image: this.state.show_image < 3 ? this.state.show_image + 1 : 1,
    });
  }

  last_image() {
    console.log(this.state);

    this.setState({
      show_image: this.state.show_image > 1 ? this.state.show_image - 1 : 3,
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    if (this.state.show_image === 1) {
      return (
        <div className="project_image_container">
          <div>
            <img src={this.props.image1} alt="" />
          </div>
          <button onClick={() => this.next_image()} className="next_image">
            &rarr;
          </button>
          <button onClick={() => this.last_image()} className="last_image">
            &larr;
          </button>
        </div>
      );
    }
    if (this.state.show_image === 2) {
      return (
        <div className="project_image_container">
          <div>
            <img src={this.props.image2} alt="" />
          </div>
          <button onClick={() => this.next_image()} className="next_image">
            &rarr;
          </button>
          <button onClick={() => this.last_image()} className="last_image">
            &larr;
          </button>
        </div>
      );
    } else
      return (
        <div className="project_image_container">
          <div>
            <img src={this.props.image3} alt="" />
          </div>
          <button onClick={() => this.next_image()} className="next_image">
            &rarr;
          </button>
          <button onClick={() => this.last_image()} className="last_image">
            &larr;
          </button>
        </div>
      );
  }
}
