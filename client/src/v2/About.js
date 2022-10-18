import React from 'react';
import styles from './styles_v2/about.module.css';
import SectionHeader from './SectionHeader';
import FadeInSection from './FadeInSection';

// Import images
import tree from './images/tree.png'
import sun from './images/cornell_sun.jpg'

export default function About() {
  const spotlights = "http://specials.cornellsun.com/black-history-month-spotlights";
  const covid = "http://specials.cornellsun.com/covid19dash";
  const nys23 = "http://specials.cornellsun.com/nys23";

  return (
    <div className={styles.full_container}>
      <FadeInSection from_left={true}>
        <SectionHeader section_name="About" />
      </FadeInSection>

        <div className={styles.subcontainer}>
          <div className={styles.subcontainer_text}>
            <FadeInSection>
              <h1 className={styles.subcontainer_header}>I began building websites in school.</h1>
            </FadeInSection>
            <FadeInSection>
              <p className={styles.subcontainer_subtext}>
                I took my first course on programming for the web during my studies at <b>Cornell University</b>.
              </p>
          </FadeInSection>
          <FadeInSection>
              <p className={styles.subcontainer_subtext}>
                I learned the basic structures of websites and a <b>user-centered</b> approach for
                designing them.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p className={styles.subcontainer_subtext}>
              I fell in love with JavaScript right away. I was inspired by the power it gave me
              in building user interfaces.
              </p>
            </FadeInSection>
          </div>
          
        <div className={styles.subcontainer_img}>
          <FadeInSection>
            <img
              src={tree}
              alt="a tree on Cornell's campus"
              className={styles.about_img}
            />
          </FadeInSection>
        </div>
      </div>
      
      <div className={styles.subcontainer}>
        <div className={styles.subcontainer_img}>
          <FadeInSection>
            <img
              src={sun}
              alt="Cornell Daily Sun's headquarters"
              className={styles.about_img}
            />
          </FadeInSection>
        </div>
        <div className={styles.subcontainer_text}>
          <FadeInSection>
            <h1 className={styles.subcontainer_header}>
              I joined a team of developers.
            </h1>
          </FadeInSection>


          <FadeInSection>
            <p className={styles.subcontainer_subtext}>
              A year later I had the privilege of working on the <a href="https://cornellsun.com/"><b>Cornell Daily Sun's Web Team</b></a> where I
              helped design and implement experimental web pages like <a href={spotlights}><b>this one</b></a>
              , <a href={covid}><b>this one</b></a>, and <a href={nys23}><b>this one</b></a>.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.subcontainer_subtext}>
              I gained experience using some of the most widely used JavaScript Frameworks, <b>React</b> and <b>D3.js</b>.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.subcontainer_subtext}>
              I also learned about agile methodologies like <b>SCRUM</b> and <b>Kanban</b>.
            </p>
          </FadeInSection>
           
        </div>
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.subcontainer_text}>
          <FadeInSection>
            <div className={styles.transition_subtext}>
              <p>
                With the help of these tools and a knowledge of the fundamentals,
                I've been able to create exciting new projects of my own.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.transition_cta}> Scroll down to see some of my most recent projects.</p>
          </FadeInSection>
        </div>
      </div>
      </div>
  )
}
