import React from "react";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentWrapper}>
            <div className={styles.heading}>Crypto Anywhere</div>
            <div className={styles.text}>
              Send, receive & exchange cryptocurrency with ease on the world’s
              leading Desktop, Mobile and Hardware crypto wallets.
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <span className={styles.text}>Learn More</span>
              </button>
              <button className={styles.button}>
                <span className={styles.text}>Download</span>
              </button>
            </div>
          </div>

          <div className={styles.scroll}>
            <img src={"/mouse.png"} />
            <span>Scroll Down</span>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.imgContainer} src={"/bannerLeft.png"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
