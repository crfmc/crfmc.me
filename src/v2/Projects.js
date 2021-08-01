import React from 'react'
import * as styles from "./styles_v2/projects.module.css"
import SectionHeader from './SectionHeader'
import Project from './Project';

function Projects() {
  return (
    <div className={styles.full_container}>
      <SectionHeader section_name="Projects" />
      <div className={styles.projects_container}>
        <Project
          name="Project 1 Name"
          members="3"
          languages= {["JavaScript", "Python"]}
          frameworks="Flask"
        />
        {/* <Project 
          name="Project 2"
        />
        <Project 
          name="Project 3"
        />
        <Project 
          name="Project 4"
        />
        <Project 
          name="Project 5"
        />
        <Project 
          name="Project 6"
        /> */}
      </div>
    </div>
  )
}

export default Projects
