import React, { useState } from 'react'
import Projlinks from './Projlinks'
import * as styles from "./styles_v2/project.module.css"

export default function Project(props) {

  const langlist = props.languages.map((lang, key) =>
      <h4 className={styles.detail} key={key}>{lang}</h4>
  );
  
  const frameworklist = props.frameworks.map((framework, key) =>
      <h4 className={styles.detail} key={key}>{framework}</h4>
  );
  
  return (
    <div className={styles.project_container}>

      <div
        style={{
        flexGrow: "1",
        width: "70%",
        height: "90%",
        margin: "auto 2% auto 5%",
        backgroundImage: "url(" + props.preview + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        border: "1px solid white",
        borderRadius: "5px"
        }}
        className={styles.project_img_container}
      ></div>

      <div className={styles.project_details}>
        <h1 className={styles.project_name}>{props.name}</h1>
        <div className={styles.members}>
          <h4 className={styles.detail_header}>Members</h4>
          <h4 className={styles.detail}>{props.members}</h4>
        </div>
        <div className={styles.languages}>
          <h4 className={styles.detail_header}>Languages</h4>
          {langlist}
        </div>
        <div className={styles.frameworks}>
          <h4 className={styles.detail_header}>Frameworks</h4>
          {frameworklist}
        </div>
        <div className={styles.projlinks_container}>
          <Projlinks
            github={props.github}
            pagelink={props.pagelink}
          />
        </div>
      </div>
    </div>
  );
}