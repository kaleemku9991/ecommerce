import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ShippingForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ address: '', city: '', postalCode: '' }}
      validationSchema={Yup.object({
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        postalCode: Yup.string().required('Postal Code is required'),
      })}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form>
        <Field name="address" placeholder="Address" />
        <ErrorMessage name="address" component="div" />
        <Field name="city" placeholder="City" />
        <ErrorMessage name="city" component="div" />
        <Field name="postalCode" placeholder="Postal Code" />
        <ErrorMessage name="postalCode" component="div" />
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default ShippingForm;
