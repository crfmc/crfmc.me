import React from 'react'
import TopNav from '../TopNav'
import Greeting from '../Greeting'
import Navigation from '../Navigation'
import * as styles from '../styles_v2/screen0.module.css'


function Screen0() {
  return (
    <div id="screen0" className={styles.full_container}>
      <TopNav />
      <Greeting />
      <Navigation />
    </div>
  )
}

export default Screen0

