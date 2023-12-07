import React from "react";
import styles from "./RightRegisterSide.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import SocialLogin from "../SocialLogin/SocialLogin";
const RightRegisterSide = ({ isLoginForm, setIsLoginForm }) => {
  return (
    <div className={styles.RightLoginSide}>
      <h3>Get Started Now</h3>
      <p>Enter your credentials to access your account</p>
      <SocialLogin />
      <div className={styles.RightLoginSide__Or}>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <LoginForm isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
    </div>
  );
};

export default RightRegisterSide;
