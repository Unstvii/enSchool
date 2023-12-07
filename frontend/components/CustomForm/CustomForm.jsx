import React, { useState } from "react";
import MainTextSide from "./MainTextSide/MainTextSide";
import styles from "./CustomForm.module.scss";
import RightRegisterSide from "./RightRegisterSide/RightRegisterSide";
import RightLoginSide from "./RightLoginSide/RightLoginSide";

const CustomForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  return (
    <div className={styles.CustomForm}>
      <MainTextSide />
      {isLoginForm ? (
        <RightRegisterSide
          setIsLoginForm={setIsLoginForm}
          isLoginForm={isLoginForm}
        />
      ) : (
        <RightLoginSide
          setIsLoginForm={setIsLoginForm}
          isLoginForm={isLoginForm}
        />
      )}
    </div>
  );
};

export default CustomForm;
