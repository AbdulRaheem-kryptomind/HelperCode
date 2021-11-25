import React from "react";
import styles from "./switch.module.scss";

const ToggleSwitch = ({ label }) => {
  return (
    <div className={styles.container}>
      {""}
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
