import React from 'react'
import Greeting from '../Greeting'
import Navigation from '../Navigation'
import Logo from '../Logo'
import * as styles from '../styles_v2/screen0.module.css'


function Screen0() {
  return (
    <div id="screen0" className={styles.full_container}>
      <Logo />
      <Greeting />
      <Navigation />
    </div>
  )
}

export default Screen0

