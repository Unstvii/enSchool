import React from "react";
import styles from "./RightLoginSide.module.scss";
import SocialLogin from "../SocialLogin/SocialLogin";
import LoginForm from "../LoginForm/LoginForm";
const RightLoginSide = ({ isLoginForm, setIsLoginForm }) => {
  return (
    <div>
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
    </div>
  );
};

export default RightLoginSide;
