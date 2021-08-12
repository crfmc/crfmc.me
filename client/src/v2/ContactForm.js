import React, { Component } from 'react'
import { Formik, Form, Field, useField } from 'formik'
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



export default class ContactForm extends Component {

  render() {
    return (
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
            values => console.log(values)
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
}
