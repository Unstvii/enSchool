import React from "react";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import styles from "../MainTextSide/MainText.module.scss";
import NavPanel from "../NavPanel/NavPanel";

const MainTextSide = () => {
  return (
    <div className={styles.MainTextSide__wrapper}>
      <div className={styles.MainTextSide}>
        <HeaderForm />
        <h2 className={styles.MainTextSide__title}>
          Automate <br />
          Your Code Now For Free
        </h2>
        <div className={styles.MainTextSide__demo}>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-play-1779827-1513991.png"
              alt="play icon"
            />
          </div>
          <span>Watch demo</span>
        </div>
        <NavPanel />
      </div>
    </div>
  );
};

export default MainTextSide;
