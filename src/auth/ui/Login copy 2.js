import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import doSubmit from '../bloc/LoginBloc';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as Svg12 } from '../../static/images/logo1.svg';
import Logo from '../../static/images/nav-images/MaskGroup.png';

import Footer from '../../admin/components/Footer';

import '../../static/css/navs.css';
import '../../static/css/auth.css';
import '../../static/css/auth_overide.css';

const Login = () => {
  const history = useHistory();

  const handleSubmit = async (dataToSubmit) => {
    const isLogin = await doSubmit(dataToSubmit);
    if (isLogin) {
      history.push('/dashboard');
    }
    // window.localStorage.getItem('loggedIn');
    // if (window.localStorage.getItem('loggedIn')) {
    //   setTimeout(() => {
    //     return history.push('/dashboard');
    //   }, 100);
    // }
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required')
  });
  return (
    <div>
      {/* LOGIN */}
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
            password: '',
            email: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            setTimeout(() => {
              let dataToSubmit = {
                email: values.email,
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
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      defaultValue=""
                      placeholder="email"
                      autoComplete="off"
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
                  <button className="btn-default">Login</button>
                </div>

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
      {/* LOGIN END */}
    </div>
  );
};

export default Login;
