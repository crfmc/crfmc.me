import React from 'react'
import SideLink from './SideLink.js'
import styles from './styles_v2/sidelinks.module.css'

// import icon files
import github from './images/navlink_logos/github.svg'
import linkedin from './images/navlink_logos/linkedin.svg'
import mail from './images/navlink_logos/mail.svg'
import instagram from './images/navlink_logos/instagram.svg'

export default function SideLinks() {
  return (
    <div className={styles.container}>
      <SideLink
        icon={github}
        href={"https://github.com/crfmc"}
      />
      <SideLink
        icon={linkedin}
        href={"https://www.linkedin.com/in/cesarferreyramansilla"}
      />
      <SideLink
        icon={mail}
        href={"mailto:crf85@cornell.edu"}
      />
      <SideLink
        icon={instagram}
        href={"https://www.instagram.com/crfmc/"}
      />
      <div className={styles.line}></div>
    </div>
  )
}
