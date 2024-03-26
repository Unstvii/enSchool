import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginUser, registerUser } from "../../api/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema, registerSchema } from "../../utility/validationSchemas";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function LoginForm({ activeButton, setActiveButton }) {
  const validationSchema = activeButton.login ? loginSchema : registerSchema;

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  // const handleLoginClick = () => {
  //   setActiveButton({
  //     login: true,
  //     register: false,
  //   });
  // };
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
            const response = activeButton.login
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

          {!activeButton.login && (
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
            placeholder="Enter your Password"
            type={showPassword ? "text" : "password"}
          />
          <div className={styles.form__eyeContainer}>
            {showPassword ? (
              <VisibilityIcon
                onClick={handlePasswordClick}
                className={styles.form__eyeIcon}
              />
            ) : (
              <VisibilityOffIcon
                onClick={handlePasswordClick}
                className={styles.form__eyeIcon}
              />
            )}
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className={styles.form__error}
          />
          {!activeButton.login && (
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
          {activeButton.login && (
            <div className={styles.form__remember}>
              <label>
                <Field type="checkbox" name="checkbox" />
                <span>Remember me</span>
              </label>
              <ErrorMessage
                name="checkbox"
                component="div"
                className={styles.form__error}
              />

              <p className={styles.form__forgot}>Forgot Password?</p>
            </div>
          )}
          <button type="submit">
            {activeButton.login ? "Login" : "Register"}
          </button>
          {/* {activeButton.login ? (
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
          )} */}
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
