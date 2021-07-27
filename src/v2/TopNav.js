import React, { useState, useEffect } from 'react'

import Logo from './Logo'
import styles from './styles_v2/topnav.module.css'

export default function TopNav() {
  const [show, setShow] = useState(true);
  const setNav = () => {
    if (window.scrollY > 700) {
      setShow(false);
    }
    else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setNav)
    return () => {
      window.removeEventListener('scroll', setNav)
    }
  }, []);

  return (
    <div className={styles.hidden}>
      <Logo />
    </div>
  )
}
