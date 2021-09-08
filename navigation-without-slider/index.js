import React from "react";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.leftContainer}>
          <img className={styles.logo} src="/nav-logo.svg" />
          <div className={styles.leftMenuWrapper}>
            <div className={styles.menuItem}>Wallet</div>
            <div className={styles.menuItem}>Exchange</div>
          </div>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <span className={styles.text}>Login</span>
          </button>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <span className={styles.text}>Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
