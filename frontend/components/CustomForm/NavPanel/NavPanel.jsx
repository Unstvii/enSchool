import React from "react";

import styles from "./NavPanel.module.scss";
const NavPanel = () => {
  return (
    <ul className={styles.NavPanel}>
      <li>Home</li>
      <li>Ecosystem</li>
      <li>Blog</li>
      <li>Company</li>
    </ul>
  );
};

export default NavPanel;
