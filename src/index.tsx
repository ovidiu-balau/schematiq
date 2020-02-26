/**
 * @class Schematiq
 */

import * as React from "react";
import { Formik, Form } from "formik";
import Item from "./Item";
import { SchematiqComponent } from "./typings";
import "./styles.css";

const Schematiq = ({
  formTitle,
  handleSubmit,
  fields,
  submitLabel,
  initialValues,
  validateOnChange,
  validateOnBlur,
  validationSchema
}: SchematiqComponent) => {
  return (
    <>
      <h1>{formTitle}</h1>
      <Formik
        initialValues={initialValues || {}}
        validateOnChange={validateOnChange || false}
        validateOnBlur={validateOnBlur || false}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelper) => handleSubmit(values, formikHelper)}
        render={({ handleSubmit, isSubmitting, status, values }) => (
          <Form onSubmit={handleSubmit}>
            {fields.map(field => (
              <Item {...field} />
            ))}
            {status && status.msg && (
              <span className="schematiq__error">{status.msg}</span>
            )}
            <button
              type="submit"
              className="schematiq__button schematiq__submit"
              disabled={isSubmitting}
            >
              {submitLabel || "Submit"}
            </button>
          </Form>
        )}
      />
    </>
  );
};

export default Schematiq;
