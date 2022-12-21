import React from 'react'
import styles from './styles_v2/greeting.module.css'
import SideLinks from './SideLinks'

function Greeting(props)
{
  return (
    <div className={styles.greeting_container + " container-fluid col-10"}>
      { props.topNav &&
        <div className={styles.topNavPad}></div>
      }
      <div className={styles.sidelinks_container}>
        <SideLinks />
      </div>
      <h2 className={styles.hello}>Hello, my name is</h2>
      <h1 className={styles.name}>Cesar Ferreyra-Mansilla.</h1>
      <h2 className={styles.subtitle}>I am a developer for the web.</h2>
      {props.topNav && 
        <div className={styles.subtext_container}>
          <p className={styles.subtext}>My focus is on building effective goal-driven user experiences for websites.</p>
          <a href="mailto:crf85@cornell.edu" className={styles.subtext_link}>Email me</a>
        </div>
      }
    </div>
  )
}

export default Greeting