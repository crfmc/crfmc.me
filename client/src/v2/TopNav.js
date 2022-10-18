import React, { useState} from 'react'
  
import styles from './styles_v2/topnav.module.css'

// import necessary svg's
import Logo from './Logo'
import close from './images/navlink_logos/close.svg'
import menu from './images/navlink_logos/menu.svg'

export default function TopNav() {
  const [expandNav, setExpandNav] = useState(false);
  // const [show, setShow] = useState(true);

  // const setNav = () => {
  //   if (window.scrollY > 700) {
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', setNav)
  //   return () => {
  //     window.removeEventListener('scroll', setNav)
  //   }
  // }, []);

  // Hide scrollbar when showing navigation
  if (expandNav) { document.body.style.overflow = "hidden" }
  else {document.body.style.overflow = "scroll"};

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.logo_container}>
          <Logo w="45px"/>
        </div>
        
        {expandNav || <img
          src={menu}
          alt="Expand Menu button"
          className={styles.burger}
          onClick={() => setExpandNav(true)}
        >
        </img>}
      </div>

      { expandNav && 
        <div className={styles.expnav_container}>
          <img
            className={styles.expnav_close}
            src={close}
            alt="Close navigation."
            onClick={() => {setExpandNav(false)}}
          >
          </img>
          <div className={styles.expnav_content}>
          <a
            className={styles.expnav_link}
            href="#screen1"
            onClick={() => setExpandNav(false)}
          >
            About
          </a>
          <a
            className={styles.expnav_link}
            href="#screen2"
            onClick={() => setExpandNav(false)}
          >
            Projects
          </a>
          <a
            className={styles.expnav_link}
            href="#screen3"
            onClick={() => setExpandNav(false)}
          >Contact
          </a>
          <a
            className={`${styles.expnav_link} ${styles.resume}`}
            href="/crfmc_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setExpandNav(false)}
          >
            Resume
          </a>
          </div>
        </div>
      }
    </div>
  )
}
