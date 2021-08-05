import React from 'react'

// import screens
import Screen0 from './screens/Screen0'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/screen3'
import Screen4 from './screens/Screen4'

// import fade components

// import Styles
import * as styles from './styles_v2/landing.module.css'

export default function Landing()
{
  return (
    <>
      <div className={styles.full_container}>
        {/* Render screens in order */}
        <Screen0 />
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </div>
    </>
  );
}