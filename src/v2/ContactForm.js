import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
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
    .required('Last name is required'),
  email: Yup.string().email('Invalid email address.').required('A valid email address is required.')

});

export default class ContactForm extends Component {

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: ""
          }}
          validationSchema={validationSchema}
          onSubmit={
            values => console.log(values)
          }
        >
          {({ errors, touched }) => (
            
            <Form className={styles.form_container}>

              <div className={styles.label_input_container}>
                <label htmlFor="firstname">first name</label>
                <Field className={styles.input_field} name="firstName"></Field>
                {errors.firstName && touched.firstName ?
                  <div className={styles.error}>
                    {errors.firstName}
                  </div>
                  : null }
              </div>
              <div className={styles.label_input_container}>
                <label htmlFor="lastname">last name</label>
                <Field className={styles.input_field} name="lastName"></Field>
                {errors.lastName && touched.lastName ?
                  <div className={styles.error}>
                    {errors.lastName}
                  </div>
                  : null }
              </div>
              <div className={styles.label_input_container}>
                <label htmlFor="email">email</label>
                <Field className={styles.input_field} name="email" type="email"></Field>
                {errors.email && touched.email ?
                  <div className={styles.error}>
                    {errors.email}
                  </div>
                  : null }
              </div>
              <button className={styles.button} type="submit">submit</button>
            </Form>

          )}

        </Formik>
      </div>
    )
  }
}
