import React from 'react'
import * as styles from "./styles_v2/projects.module.css"
import SectionHeader from './SectionHeader'
import Project from './Project';

// Importing project previews
import coviz from "./images/gifs/coviz.gif"
import fileovr from "./images/gifs/fileovr.gif"
import hike from './images/gifs/tah.gif'
import poker from './images/gifs/poker.gif'

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
          libraries={["React", "Framer-motion"]}
          github="https://github.com/crfmc/fileovr"
        />
        <Project
          name="Coviz"
          preview={coviz}
          members="3"
          languages={["JavaScript"]}
          libraries={["D3.js"]}
          github="https://github.com/crfmc/coviz"
        />
        <Project
          name="Poker"
          preview={poker}
          members="3"
          languages={["OCaml"]}
          libraries={["OUnit2"]}
          github="https://github.com/crfmc/poker"
        />
        <Project
          name="Take a Hike"
          preview={hike}
          members="5"
          languages={["Python"]}
          libraries={["Flask"]}
          github="https://github.com/aliciaxw/cs4300sp2021-axw5-ac2596-crf85-rch294-rrr225"
        />
      </div>
    </div>
  )
}

export default Projects
