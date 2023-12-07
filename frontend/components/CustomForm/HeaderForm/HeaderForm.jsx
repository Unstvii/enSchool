import React from "react";
import styles from "./HeaderForm.module.scss";

export const HeaderForm = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header__image}
        src="https://www.freeiconspng.com/uploads/white-strategy-icon-33.png"
        alt="logo image"
      />
      <h4 className={styles.header__title}>PurpleGuru</h4>
      <span className={styles.header__companyType}>Engineering</span>
    </div>
  );
};
