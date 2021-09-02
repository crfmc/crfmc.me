import React from 'react'
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
      {props.isSmall && 
        <FadeInSection>
          <h1 className={styles.project_name}>{props.name}</h1>
        </FadeInSection>
      }
      <div
        style={
        {
          flexGrow: "1",
          width: "90%",
          height: "90%",
          margin: "auto",
          backgroundImage: "url(" + props.backup + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "1px solid white",
          borderRadius: "5px"
        }
        }
        className={styles.project_img_container}
      >
        {/* <video autoPlay loop muted playsInline>
          <source src={props.preview} type="video/webm"></source>
          <img src={props.backup} />
        </video> */}
      </div>

      <div className={styles.project_details}>
        {!props.isSmall &&
          <FadeInSection>
          <h1 className={styles.project_name}>{props.name}</h1>
          </FadeInSection>}
        <FadeInSection>
          <div className={styles.project_detail}>
            <div className={styles.members}>
              <h4 className={styles.detail_header}>Members</h4>
              <h4 className={styles.detail}>{props.members}</h4>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.project_detail}>
            <div className={styles.languages}>
              <h4 className={styles.detail_header}>Languages</h4>
              {langlist}
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.project_detail}>
            <div className={styles.libraries}>
              <h4 className={styles.detail_header}>Libraries</h4>
              {librarylist}
            </div>
          </div>
        </FadeInSection>
        {!props.isSmall &&
          <div className={styles.projlinks_container}>
          <Projlinks
            github={props.github}
          />
        </div>}
      </div>
      {props.isSmall &&
          <div className={styles.projlinks_container}>
          <Projlinks
            github_link={props.github}
          />
        </div>}
    </div>
  );
}