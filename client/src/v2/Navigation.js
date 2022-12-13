import React from 'react'
import styles from './styles_v2/navigation.module.css'
import NavLink from './NavLink'

// Importing icons for navigation links
import face from './images/navlink_logos/face.svg'
import bulb from './images/navlink_logos/bulb.svg'
import resume from './images/navlink_logos/resume.svg'

export default function Navigation(){
  return (
    <div className={styles.navigation_container + " container-fluid col-xl-10"}>
      <NavLink
        icon={face}
        icon_alt="Minimalist face logo"
        title="About"
        href="#screen1"
        subtext="Learn about who I am and what I do."
        call="get to know me"
        animation_delay={0}
      />
      <NavLink
        icon={bulb}
        icon_alt="Minimalist bulb logo"
        title="Projects"
        href="#screen2"
        subtext="Check out some of my recent projects."
        call="check out my work"
        animation_delay={0.5}
      />
      <NavLink
        icon={resume}
        icon_alt="Minimalist sheet of paper logo"
        title="Resume"
        href="/crfmc_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        subtext="A one-page summary of my experiences."
        call="Open my resume"
        animation_delay={1}
      />
    </div>
  )
}