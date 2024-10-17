import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spases are allowed")
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(3, "Too short")
    .max(20, "Too long")
    .required("Required"),
});
const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const onSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.contactForm}>
        <div className={styles.name}>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} name="name" type="text" />
          <ErrorMessage className={styles.errorMessage} name="name" component="div" />
        </div>
        <div className={styles.name}>
          <label htmlFor={numberId}>Number</label>
          <Field id={numberId} name="number" type="tel" />
          <ErrorMessage className={styles.errorMessage} name="number" component="div" />
        </div>
        <button className={styles.addButton} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
