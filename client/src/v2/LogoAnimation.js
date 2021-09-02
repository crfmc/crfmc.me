import React from 'react'
import logo from './images/crfmc_logo_basic.svg'
import * as styles from './styles_v2/loaderStyle.module.css'


const Ripple = () => {
  return (
    <div className={ styles.ripple_container }>
      <svg className={ styles.ripple } height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="transparent" />
      </svg>
    </div>
  );
}

export const LogoAnimation = (props) => {



  return (
    <>
      {/* <Ripple /> */}
      <div className={styles.full_container}>
        <div className={styles.content}>
          <img className={styles.animated_logo} src={logo} alt="Cesar's Logo" />
        </div>
      </div>
    </>
  )
}

export default LogoAnimation;