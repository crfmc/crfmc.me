import React from 'react'
import * as styles from './styles_v2/about.module.css'
import SectionHeader from './SectionHeader'

// Import images
import tree from './images/tree.png'
import sun from './images/cornell_sun.jpg'

export default function About() {
  const spotlights = "http://specials.cornellsun.com/black-history-month-spotlights";
  const covid = "http://specials.cornellsun.com/covid19dash";
  const nys23 = "http://specials.cornellsun.com/nys23";

  return (
    <div className={styles.full_container}>
      <SectionHeader section_name="About" />

      {/* 2017 */}
      <div className={styles.content_container}>
        <h1 className={styles.year}>2017</h1>
        <div className={styles.subcontainer}>
          <div className={styles.subcontainer_text}>
            <h2>Hello! My name is Cesar. My passion is developing websites.</h2>
            <p>
              I began building websites during my Sophomore year at <b>Cornell University</b> when I decided to explore the
              world of the web. I took an introductory course on programming for the web, and created my first site.
            </p>
          </div>

          <img
            src={tree}
            alt="a tree on Cornell's campus"
            className={styles.about_img}
          />
        </div>
      </div>

        {/* 2019 Cornell Sun */}
        <div className={styles.content_container}>
          <div className={styles.subcontainer}>
            <img src={sun} alt="Image of Cornell Daily Sun's headquarters" />
            <div className={styles.subcontainer_text}>
              <p>
                A year later I had the privilege of working on the <b>Cornell Daily Sun's Web Team</b> where I
                helped design and implement experimental web pages like <a href={spotlights}>this one</a>
                , <a href={covid}>this one</a>, <a href={nys23}>and this one</a>.
              </p>
              <p>
                I learned the most about agile methodologies like SCRUM and Kanban here. It is also where I gained 
                experience using some of the most widely used JavaScript Frameworks, <b>React</b> and <b>D3.js</b>.
              </p>
            </div>
          </div>
        </div>

      {/* Projects Transition */}
        <div className={styles.content_container}>
          <div className={styles.subcontainer}>
            <div className={styles.subcontainer_text}>
              <p>
                With the help of these tools and several others, I've been able to create cool and exciting projects with people
                who are interested in similar things.
              </p>
              <p><b>Scroll to check some out!</b></p>
            </div>
          </div>
        </div>
    </div>
  )
}
