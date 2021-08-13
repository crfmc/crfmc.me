import React from 'react'
import TopNav from '../TopNav'
import Greeting from '../Greeting'
import Navigation from '../Navigation'
import * as styles from '../styles_v2/screen0.module.css'


function Screen0(props) {
  return (
    <div id="screen0" className={styles.full_container}>
      { props.isSmallScreen && <TopNav /> }
      <Greeting topNav={props.isSmallScreen} />
      {props.isSmallScreen || <Navigation />}
    </div>
  )
}

export default Screen0

