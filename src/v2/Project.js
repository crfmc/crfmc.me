import React, { useState } from 'react'
import Projlinks from './Projlinks'
import FadeInSection from './FadeInSection';

import * as styles from "./styles_v2/project.module.css"

export default function Project(props) {

  const langlist = props.languages.map((lang, key) =>
      <h4 className={styles.detail} key={key}>{lang}</h4>
  );
  
  const librarylist = props.libraries.map((lib, key) =>
      <h4 className={styles.detail} key={key}>{lib}</h4>
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
        <FadeInSection>
          <h1 className={styles.project_name}>{props.name}</h1>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.members}>
            <h4 className={styles.detail_header}>Members</h4>
            <h4 className={styles.detail}>{props.members}</h4>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.languages}>
            <h4 className={styles.detail_header}>Languages</h4>
            {langlist}
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.libraries}>
            <h4 className={styles.detail_header}>Libraries</h4>
            {librarylist}
          </div>
        </FadeInSection>
        <div className={styles.projlinks_container}>
          <Projlinks
            github={props.github}
          />
        </div>
      </div>
    </div>
  );
}