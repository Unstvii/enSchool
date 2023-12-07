import React from "react";
import styles from "./SocialLogin.module.scss";

const SocialLogin = () => {
  return (
    <div className={styles.SocialLogin}>
      <button>
        <img
          src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
          alt="Google Icon"
        />
        Log in with Google
      </button>
      <button>
        <img
          src="https://cdn4.iconfinder.com/data/icons/leto-most-searched-mix-8/64/__apple_mac_logo-512.png"
          alt="Apple Icon"
        />
        Log in with Apple
      </button>
    </div>
  );
};

export default SocialLogin;
