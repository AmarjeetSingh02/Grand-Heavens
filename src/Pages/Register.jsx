
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Register.css';

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      otp: '',
      password: '',
      confirmPassword: '',
      userType: '',
      homeNo: '',
      area: '',
      locality: '',
      pinCode: '',
      city: '',
      state: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      userType: Yup.string().required('Required'),
      homeNo: Yup.string().required('Required'),
      area: Yup.string().required('Required'),
      locality: Yup.string().required('Required'),
      pinCode: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
     
      console.log(values);
    },
  });

  return (
    <div className="card">
      <div className="head"><h1>Register</h1></div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form">
        <div className="form1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="error">{formik.errors.phone}</div>
        )}

        {formik.values.userType === 'UPLOADER' && (
          <>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.otp}
            />
            {formik.touched.otp && formik.errors.otp && (
              <div className="error">{formik.errors.otp}</div>
            )}
          </>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="error">{formik.errors.confirmPassword}</div>
        )}
        
        <label style={{textAlign:"center"}}>User Type</label>
        <div className="radio-btn">
        
        <div>
          <input
            type="radio"
            id="customer"
            name="userType"
            value="CUSTOMER"
            onChange={formik.handleChange}
            checked={formik.values.userType === 'CUSTOMER'}
          />
          <label htmlFor="customer">Customer</label>
        </div>
        <div>
          <input
            type="radio"
            id="uploader"
            name="userType"
            value="UPLOADER"
            onChange={formik.handleChange}
            checked={formik.values.userType === 'UPLOADER'}
          />
          <label htmlFor="uploader">Uploader</label>
        </div>
        </div>
        </div>
          <div className="form2">
        <label htmlFor="homeNo">Home No.</label>
        <input
          type="text"
          id="homeNo"
          name="homeNo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.homeNo}
        />
        {formik.touched.homeNo && formik.errors.homeNo && (
          <div className="error">{formik.errors.homeNo}</div>
        )}

        <label htmlFor="area">Area</label>
        <input
          type="text"
          id="area"
          name="area"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.area}
        />
        {formik.touched.area && formik.errors.area && (
          <div className="error">{formik.errors.area}</div>
        )}

        <label htmlFor="locality">Locality</label>
        <input
          type="text"
          id="locality"
          name="locality"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locality}
        />
        {formik.touched.locality && formik.errors.locality && (
          <div className="error">{formik.errors.locality}</div>
        )}

        <label htmlFor="pinCode">Pin Code</label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pinCode}
        />
        {formik.touched.pinCode && formik.errors.pinCode && (
          <div className="error">{formik.errors.pinCode}</div>
        )}

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <div className="error">{formik.errors.city}</div>
        )}

        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
        />
        {formik.touched.state && formik.errors.state && (
          <div className="error">{formik.errors.state}</div>
        )}
        </div>
        </div>
        <div className="button-btn">
        <button type="submit">Register</button></div>
      </form>
    </div>
  );
};

export default App;
