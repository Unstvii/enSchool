import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginUser, registerUser } from "../../api/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema, registerSchema } from "../../utility/validationSchemas";
function LoginForm({ isLoginForm, setIsLoginForm }) {
  const validationSchema = isLoginForm ? loginSchema : registerSchema;

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginClick = () => {
    setIsLoginForm(!isLoginForm);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          nickname: "",
          email: "",
          password: "",
          checkbox: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);

          try {
            const response = isLoginForm
              ? await loginUser(values)
              : await registerUser(values);
            console.log(response.data);
          } catch (err) {
            toast.error("User already exists!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="email">Email address</label>
          <Field
            name="email"
            placeholder="Enter your email address"
            type="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className={styles.form__error}
          />

          {!isLoginForm && (
            <>
              <label htmlFor="nickname">Username</label>
              <Field
                name="nickname"
                placeholder="Enter your nickname"
                type="text"
              />
              <ErrorMessage
                name="nickName"
                component="div"
                className={styles.form__error}
              />
            </>
          )}

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            placeholder="Min 8 chars"
            type={showPassword ? "text" : "password"}
          />
          <div className={styles.form__eyeContainer}>
            {showPassword ? (
              <img
                className={styles.form__eyeIcon}
                src="https://static.thenounproject.com/png/4334035-200.png"
                onClick={handlePasswordClick}
                alt="eye icon"
              />
            ) : (
              <img
                className={styles.form__eyeIcon}
                src="https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png"
                onClick={handlePasswordClick}
                alt="eye icon"
              />
            )}
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className={styles.form__error}
          />
          {!isLoginForm && (
            <label className={styles.form__privacy}>
              <Field type="checkbox" name="checkbox" />I agree to the
              <a href="#">Terms & Privacy</a>
              <ErrorMessage
                name="checkbox"
                component="div"
                className={styles.form__error}
              />
            </label>
          )}

          <button type="submit">{isLoginForm ? "Login" : "Register"}</button>
          {isLoginForm ? (
            <p>
              Don't have an account?
              <span
                onClick={handleLoginClick}
                className={styles.form__switchText}
              >
                Register
              </span>
            </p>
          ) : (
            <p>
              Already a member?
              <span
                onClick={handleLoginClick}
                className={styles.form__switchText}
              >
                Login
              </span>
            </p>
          )}
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
