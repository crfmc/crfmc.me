import React, { useState } from 'react'
import { Formik, Form, useField } from 'formik'
import Axios from 'axios'
import * as Yup from 'yup'

import * as styles from "./styles_v2/form.module.css"


// Create a validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name too short.')
    .max(20, 'First name too long.')
    .required('First name is required.'),
  lastName: Yup.string()
    .min(2, 'Last name too short.')
    .max(20, 'Last name too long.')
    .required('Last name is required.'),
  email: Yup.string().email('Invalid email address.').required('Valid email address is required.'),
  subject: Yup.string()
    .min(5, 'Subject too short.')
    .max(40, 'Subject too long.')
    .required('A message subject is is required.'),
  message: Yup.string().min(10, 'Message too short.').max(200, 'Message too long.').required('Message is required.')

});

// Define a text field using formik useField
const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.label_input_container}>
      <label>
        {label}
        <input className={styles.input_field} {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null
      }
    </div>
  );
};

// Define a text area using formik useField
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.label_input_container}>
      <label>
        {label}
        <textarea className={styles.message_field} {...field} {...props}></textarea>
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null
      }
    </div>
  );
};


export default function ContactForm() {
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (values) => {

  // Add date to the values object
  let now = new Date().toString();
  values.date = now;
  console.log(values);

  Axios.post("https://crfmc-backend.herokuapp.com/api/insert", values)
    .then(data => {
      setShowThanks(true);
      console.log(values);
    });

}
  
  return (
    showThanks ?
      <div className={styles.thanks_container}>
        <h1>Thanks for your message!</h1>
        <h3>I look forward to writing back.</h3>
        <h3>&#128512;</h3>
      </div>
      :
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
          }}
          validationSchema={validationSchema}
          onSubmit={
            values => handleSubmit(values)
          }
        >
          {({ errors, touched }) => (
            
            <Form className={styles.form_container}>

              <MyTextField name="firstName" type="text" label="First Name" />
              <MyTextField name="lastName" type="text" label="Last Name" />
              <MyTextField name="email" type="email" label="Email" />
              <MyTextField name="subject" type="text" label="Subject" />
              <MyTextArea name="message" type="text" label="Message"  maxLength="200"/>
              <button
                className={styles.submit_button}
                type="submit">
                Submit
              </button>
            </Form>

          )}

        </Formik>
      </div>
    )
}
