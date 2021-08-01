import React, { useState } from 'react'
import Projlinks from './Projlinks'
import * as styles from "./styles_v2/project.module.css"

export default function Project(props) {
  const [showOverlay, setshowOverlay] = useState(false);

  const langlist = props.languages.map((lang, key) =>
      <h4 key={key}>{lang}</h4>
    );
  return (
    <div className={styles.project_container}>

      <div className={styles.project_img_container}></div>

      <div className={styles.project_details}>
        <h1 className={styles.project_name}>{props.name}</h1>
        <div className={styles.members}>
          <h4 className={styles.detail_header}>Members</h4>
          <h4>{props.members}</h4>
        </div>
        <div className={styles.languages}>
          <h4 className={styles.detail_header}>Languages</h4>
          {langlist}
        </div>
        <div className={styles.frameworks}>
          <h4 className={styles.detail_header}>Frameworks</h4>
          <h4>{props.frameworks}</h4>
        </div>
        <div className={styles.projlinks_container}>
          <Projlinks
            github="github link"
            link="open link"
          />
        </div>
      </div>
    </div>
  );
}