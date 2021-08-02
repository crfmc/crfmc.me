import React from 'react'
import * as styles from "./styles_v2/projects.module.css"
import SectionHeader from './SectionHeader'
import Project from './Project';

// Importing project previews
import coviz from "./images/gifs/coviz.gif"
import fileovr from "./images/gifs/fileovr.gif"

function Projects() {
  return (
    <div className={styles.full_container}>
      <SectionHeader section_name="Projects" />
      <div className={styles.projects_container}>
        <Project 
          name="Fileovr"
          preview={fileovr}
          members="1"
          languages={["JavaScript"]}
          frameworks={["React", "Framer-motion"]}
          github="https://github.com/crfmc/fileovr"
        />
        <Project
          name="Coviz"
          preview={coviz}
          members="3"
          languages={["JavaScript"]}
          frameworks={["D3.js"]}
          github="https://github.com/crfmc/coviz"
        />
      </div>
    </div>
  )
}

export default Projects
