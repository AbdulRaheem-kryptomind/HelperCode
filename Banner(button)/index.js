import React from "react";
import styles from "./banner1.module.scss";

const Banner1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentWrapper}>
            <div className={styles.heading}>
              Get 50,000 Worth of SNO Tokens by simply referring someone.
            </div>
            <div className={styles.text}>
              Send, receive & exchange cryptocurrency with ease on the world’s
              leading Desktop, Mobile and Hardware crypto wallets.
            </div>
            <div className={styles.text}>
              Send, receive & exchange cryptocurrency with ease on the world’s
              leading Desktop, Mobile and Hardware crypto wallets.
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <span className={styles.text}>Marketing</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.imgContainer} src={"/banner1.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Banner1;

