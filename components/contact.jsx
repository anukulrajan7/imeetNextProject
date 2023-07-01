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
    <div className='w-full bg-white px-4 py-2 flex flex-col gap-5'>
      <h2 className='text-white bg-purple-700 py-2 px-3 rounded-md text-3xl font-Mullish font-bold text-center bg-'>Contact Us</h2>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col  text-purple-700 font-semibold text-xl gap-2  px-4 py-2'>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            className='bg-gray-300 outline-none px-2 py-2 border-b-[3px] w-full mx-auto border-black'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-700 text-sm '>{formik.errors.name}</span>
          )}
        </div>
        <div className='flex flex-col  text-purple-700 font-semibold text-xl gap-2  px-4 py-'>
          <label htmlFor="lastName">Last Name:</label>
          <input
                      className='bg-gray-300 outline-none px-2 py-2 border-b-[3px] w-full mx-auto border-black'

            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <span className='text-red-700 text-sm '>{formik.errors.lastName}</span>
          )}
        </div>
        <div className='flex flex-col  text-purple-700 font-semibold text-xl gap-2  px-4 py-2'>
          <label htmlFor="email">Email:</label>
          <input
                      className='bg-gray-300 outline-none px-2 py-2 border-b-[3px] w-full mx-auto border-black'

            type="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-700 text-sm '>{formik.errors.email}</span>
          )}
        </div>
        <div className='flex flex-col  text-purple-700 font-semibold text-xl gap-2  px-4 py-2'>
          <label htmlFor="phone">Phone:</label>
          <input
                      className='bg-gray-300 outline-none px-2 py-2 border-b-[3px] w-full mx-auto border-black'

            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className='text-red-700 text-sm '>{formik.errors.phone}</span>
          )}
        </div>
        <div  className='flex flex-col  text-purple-700 font-semibold text-xl gap-2  px-4 py-2'>
          <label htmlFor="message">Message:</label>
          <textarea
                      className='bg-gray-300 outline-none px-2 py-2 border-b-[3px] w-full mx-auto border-black'

            id="message"
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && (
            <span className='text-red-700 text-sm '>{formik.errors.message}</span>
          )}
        </div>
        <button type="submit" className='w-[80%] px-5 py-4 text-2xl bg-purple-700 text-white text-center shadow-md rounded-md mx-auto'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
