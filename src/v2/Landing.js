import React from 'react'
import Greeting from './Greeting'
import Navigation from './Navigation'
import * as styles from './styles_v2/landing.module.css'

export default function Landing()
{
  return (
    <div className={styles.full_container}>
      <Greeting />
      <Navigation />
    </div>
  );
}