import React from 'react'
import * as styles from './styles_v2/navigation.module.css'

import NavLink from './NavLink'

function Navigation
()
{
  return (
    <div className={styles.navigation_container}>
      <NavLink
        title="About"
        href="#screen1"
        subtext="Who am I?"
        call="get to know me"
      />
      <NavLink
        title="Work"
        href="#screen2"
        subtext="See what I've been working on"
        call="check out my work"
      />
      <NavLink
        title="Resume"
        href="/crfmc_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        subtext="A one-page summary of my experiences."
        call="Open my resume"
      />
    </div>
  )
}

export default Navigation