import React from 'react'
import Screen0 from './screens/Screen0'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Project from './Project'
import * as styles from './styles_v2/landing.module.css'

export default function Landing()
{
  return (
    <div className={styles.full_container}>
      <Screen0 />
      <Screen1 />
      <Screen2 />
    </div>
  );
}