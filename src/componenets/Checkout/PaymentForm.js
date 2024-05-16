import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PaymentForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ cardNumber: '', expiryDate: '', cvv: '' }}
      validationSchema={Yup.object({
        cardNumber: Yup.string().required('Card Number is required'),
        expiryDate: Yup.string().required('Expiry Date is required'),
        cvv: Yup.string().required('CVV is required'),
      })}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form>
        <Field name="cardNumber" placeholder="Card Number" />
        <ErrorMessage name="cardNumber" component="div" />
        <Field name="expiryDate" placeholder="Expiry Date" />
        <ErrorMessage name="expiryDate" component="div" />
        <Field name="cvv" placeholder="CVV" />
        <ErrorMessage name="cvv" component="div" />
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default PaymentForm;
