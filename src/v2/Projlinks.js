import React from 'react'

// icons
import github from './images/navlink_logos/github_light.svg'
import openlink from './images/navlink_logos/openlink.svg'

import * as styles from './styles_v2/projlink.module.css'

export default function projlinks(props) {

  if (props.github && props.pagelink) {
    return (
      <div className={styles.container}>
        <a href={props.github_link}>
          <img src={github} alt="gtihub logo (link to source code)" />
        </a>
        <a href={props.pagelink}>
          <img src={openlink} alt="open link logo (link to project)" />
        </a>
      </div>
  )
  } else {
    return (
      <div className={`${styles.container} ${styles.github_only}`}>
        <a href={props.github_link}>
          <img src={github} alt="gtihub logo (link to source code)" />
        </a>
      </div>
    )
  }
}
