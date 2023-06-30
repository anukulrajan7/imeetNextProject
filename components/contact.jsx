import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Invalid phone number')
        .required('Phone number is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: values => {
      // Form submission logic here
      console.log('Form submitted!', values);
      formik.resetForm();
    }
  });

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <span>{formik.errors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <span>{formik.errors.lastName}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span>{formik.errors.phone}</span>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && (
            <span>{formik.errors.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
