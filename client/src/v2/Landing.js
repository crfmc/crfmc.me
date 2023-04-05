import React from 'react'

// import screens
import Screen0 from './screens/Screen0';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/screen3';
import Screen4 from './screens/Screen4';

// import fade components

// import Styles
import styles from './styles_v2/landing.module.css';
// import "./styles_v2/styles.scss";

export default function Landing()
{
  const isSmallScreen = window.innerWidth < 850;
  return (
    <>
      <div className={styles.full_container}>
        {/* Render screens in order */}
        <Screen0 isSmallScreen={ isSmallScreen }/>
        <Screen1 />
        <Screen2 isSmallScreen={ isSmallScreen }/>
        <Screen3 />
        <Screen4 />
      </div>
    </>
  );
}