import React from 'react'

import ContactForm from "./ContactForm"

import * as styles from './styles_v2/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_left}>
        <h1>
          Get in touch.
        </h1>
      </div>

      <div className={styles.contact_right}>
        <div className={styles.form_container}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
