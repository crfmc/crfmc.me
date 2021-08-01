import React from 'react'
import styles from './styles_v2/section_header.module.css'

export default function SectionHeader(props) {
  return (
    <div className={styles.header_container}>
      <svg height="20px" width="210px">
        <line x1="0" y1="0" x2="200" y2="0" className={ styles.line }/>
      </svg>
      <h4 className={styles.section_name}>{props.section_name}</h4>
    </div>
  )
}
