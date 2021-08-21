import React from 'react'
import * as styles from "./styles_v2/projects.module.css"
import SectionHeader from './SectionHeader'
import Project from './Project';

// Importing project previews
import coviz from "./images/samples/coviz.gif"
import fileovr from "./images/samples/fileovr.gif"
import hike from './images/samples/tah.gif'
import poker from './images/samples/poker.gif'

import vcoviz from "./images/samples/coviz.webm"
import vfileovr from "./images/samples/fileovr.webm"
import vhike from './images/samples/tah.webm'
import vpoker from './images/samples/poker.webm'



function Projects(props) {
  return (
    <div className={styles.full_container}>
      <SectionHeader section_name="Projects" />
      <div className={styles.projects_container}>
        <Project 
          name="Fileovr"
          preview={vfileovr}
          backup={fileovr}
          members="1"
          languages={["JavaScript"]}
          libraries={["React", "Framer-motion"]}
          github="https://github.com/crfmc/fileovr"
          isSmall={props.isSmallScreen}
        />
        <Project
          name="Coviz"
          preview={vcoviz}
          backup={coviz}
          members="3"
          languages={["JavaScript"]}
          libraries={["D3.js"]}
          github="https://github.com/crfmc/coviz"
          isSmall={props.isSmallScreen}
        />
        <Project
          name="Poker"
          preview={vpoker}
          backup={poker}
          members="3"
          languages={["OCaml"]}
          libraries={["OUnit2"]}
          github="https://github.com/crfmc/poker"
          isSmall={props.isSmallScreen}
        />
        <Project
          name="Take a Hike"
          preview={vhike}
          backup={hike}
          members="5"
          languages={["Python"]}
          libraries={["Flask"]}
          github="https://github.com/aliciaxw/cs4300sp2021-axw5-ac2596-crf85-rch294-rrr225"
          isSmall={props.isSmallScreen}
        />
      </div>
    </div>
  )
}

export default Projects
