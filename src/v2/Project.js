import React, { Component, useState } from 'react'
import * as styles from "./styles_v2/project.module.css"

export default class Project extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      preview: "",
      languages: [],
      frameworks: [],
      members: 0,
      role: "",
      gained: [],
      improvements: []
    }

  }
  
  render()
  {
    return (
      <div clasName={styles.project_container}>
        {/* create a spot for the technologies used */}
      </div>
    );
  }  
}