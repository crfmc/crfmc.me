import React from 'react'

import ContactForm from "./ContactForm"
import FadeInSection from './FadeInSection'

import * as styles from './styles_v2/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_left}>
        <div className={styles.contact_text}>
          <FadeInSection>
            <h1 className={styles.header}>
              Get in touch.
            </h1>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.text}>
              I'm currently searching for roles as a <b>frontend software developer</b>.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.text}>
              If your team or someone you know is looking for one, do not hesitate to reach out!
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.text}>
              Otherwise, I am happy to talk about all things web development.
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className={styles.contact_right}>
        <div className={styles.form_container}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
