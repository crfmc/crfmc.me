import React from 'react'
import styles from './styles_v2/sidelink.module.css'

export default function SideLink(props) {
  return (
    <a
      href={props.href}
      target="_blank"
    >
      <div className={styles.icon_container}>
        <img src={props.icon} alt={props.icon_alt} />
      </div>
    </a>
  )
}
