import React, { Component, useState } from 'react'
import * as styles from "./styles_v2/project.module.css"

export default class Project extends Component
{
  constructor(props)
  {
    super(props);
    // Set the state of each project to be its fields and form.
    this.state = {
      data: {
        preview: this.props.preview,
        languages: this.props.languages,
        frameworks: this.props.frameworks,
        members: this.props.members,
        role: this.props.role,
        gained: this.props.gained,
        improvements: this.props.improvements
      },
      clicked: false
    }

  }
  
  render()
  {
    return (
      <div
        clasName={styles.project_container}
        
      >
        {/* create a spot for the technologies used */}
      </div>
    );
  }  
}