import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import doSubmit from '../bloc/UserBloc';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';

import Footer from '../../admin/components/Footer';

import '../../static/css/navs.css';
import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (dataToSubmit) => {
    console.log('register clicked!!');
    const isRegister = await doSubmit(dataToSubmit);
    if (isRegister) {
      console.log('registered!!');
    }
  };

  const SigninSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(2, 'Name Too Short!')
      .max(50, 'Name Too Long!'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phonenumber: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    password: Yup.string()
      .min(2, 'Invalid Password')
      .max(50, 'Invalid Password')
      .required('Invalid Password')
      .required('Required')
  });
  return (
    <div>
      {/* REGISTER */}
      <header>
        <div className="logo">
          <Link to="#">
            <img src={Logo} alt="logo" />
            <h5>bitsquadtraders</h5>
          </Link>
        </div>
      </header>
      <main className="authmain authmain-2">
        <Formik
          initialValues={{
            name: '',
            email: '',
            phonenumber: '',
            address: '',
            password: ''
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => {
            // same shape as initial values
            setTimeout(() => {
              let dataToSubmit = {
                name: values.name,
                email: values.email,
                phonenumber: values.phonenumber,
                address: values.address,
                password: values.password
              };
              console.log(dataToSubmit);
              handleSubmit(dataToSubmit);
            }, 3000);
            console.log(values);
          }}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="header">
                  <h3>Welcome!! to bitsquadtraders</h3>
                  <div className="mobile">
                    <Svg12 />
                    <h2>Welcome!! to bitsquadtraders</h2>
                  </div>
                </div>
                <div className="main-form">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.name && touched.name
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback" style={{ color: 'red' }}>
                        {errors.name}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.email && touched.email
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback" style={{ color: 'red' }}>
                        {errors.email}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                  <div className="field">
                    <label htmlFor="phonenumber">Phone</label>
                    <input
                      name="phonenumber"
                      type="text"
                      id="phonenumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.phonenumber && touched.phonenumber
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.phonenumber && touched.phonenumber && (
                      <div
                        className="input-feedback"
                        style={{ color: 'red', maxWidth: '19em' }}
                      >
                        {errors.phonenumber}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onReset={handleReset}
                      className={
                        errors.password && touched.password
                          ? 'form-control error'
                          : 'form-control'
                      }
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback" style={{ color: 'red' }}>
                        {errors.password}
                      </div>
                    )}
                    {/* {error && <div className="err-msg">{error}</div>} */}
                  </div>
                </div>
                <button type="submit" className="btn-default">
                  Register
                </button>

                <div className="question">
                  <Link to="/register">Create account</Link>
                  <Link to="#">
                    <span>/</span> Forgot Password
                  </Link>
                </div>
              </form>
            );
          }}
        </Formik>
        <Footer />
      </main>
      {/* REGISTER END */}
    </div>
  );
};

export default Register;
