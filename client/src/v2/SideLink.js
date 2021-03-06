import React, {useState} from 'react'
import styles from './styles_v2/sidelink.module.css'

export default function SideLink(props) {
  const [showName, setShowName] = useState(false);
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.icon_container}>
        <img
          src={props.icon}
          alt={props.icon_alt}
          onMouseEnter={() => {setShowName(true) }}
          onMouseLeave={() => {setShowName(false)}}
        />
        <p className={showName ? styles.icon_name : styles.hidden}>{props.name}</p>
      </div>
    </a>
  )
}
