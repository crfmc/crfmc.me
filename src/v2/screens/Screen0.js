import React, { useState } from 'react'
import TopNav from '../TopNav'
import Greeting from '../Greeting'
import Navigation from '../Navigation'
import * as styles from '../styles_v2/screen0.module.css'


function Screen0(props) {
  const [showTopNav, setShowTopNav] = useState(props.isSmallScreen);

  return (
    <div id="screen0" className={styles.full_container}>
      { showTopNav && <TopNav /> }
      <Greeting topNav={showTopNav} />
      {showTopNav || <Navigation />}
    </div>
  )
}

export default Screen0

