import React from 'react'
import * as styles from './styles_v2/greeting.module.css'
import SideLinks from './SideLinks'

function Greeting()
{
  return (
    <div className={styles.greeting_container}>
      <div className={styles.sidelinks_container}>
        <SideLinks />
      </div>
      <h2 className={styles.hello}>Hello, my name is</h2>
      <h1 className={styles.name}>Cesar Ferreyra-Mansilla.</h1>
      <h2 className={styles.subtitle}>I am a developer for the web.</h2>
    </div>
  )
}

export default Greeting