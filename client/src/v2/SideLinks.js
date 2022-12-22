import React from 'react'
import SideLink from './SideLink.js'
import styles from './styles_v2/sidelinks.module.css'

// import icon files
import github from './images/navlink_logos/github_light.svg'
import linkedin from './images/navlink_logos/linkedin_light.svg'
import mail from './images/navlink_logos/mail_light.svg'
import instagram from './images/navlink_logos/instagram_light.svg'

export default function SideLinks() {
  return (
    <div className={styles.container}>
      <SideLink
        icon={github}
        href={"https://github.com/crfmc"}
        name="github"
        icon_alt="Open Github profile in new tab."
      />
      <SideLink
        icon={linkedin}
        href={"https://www.linkedin.com/in/cesarferreyramansilla"}
        name="linkedin"
        icon_alt="Open LinkedIn profile in new tab."
      />
      <SideLink
        icon={mail}
        href={"mailto:crf85@cornell.edu"}
        name="email"
        icon_alt="Create an email to my email."
      />
      <SideLink
        icon={instagram}
        href={"https://www.instagram.com/crfmc/"}
        name={"instagram"
        } icon_alt="Open Instagram profile in new tab."
      />
      <div className={styles.line}></div>
    </div>
  )
}
