import React from 'react'
import styles from '../styles_v2/screen2.module.css'
import Projects from '../Projects'

function Screen2(props) {
  return (
    <div id="screen2"  className={styles.full_container}>
      <Projects isSmallScreen={ props.isSmallScreen }/>
    </div>
  )
}

export default Screen2
