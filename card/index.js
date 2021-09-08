import React from "react";
import styles from "./card.module.scss";

const Card = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div
          className={styles.card}
          // data-aos="flip-right"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
        >
          <div className={styles.image}>
          <img src={"./bannerImage.png"} alt="card" />
          </div>
          <div className={styles.title}>Card Title</div>
          <div className={styles.overviewText}>
            {" "}
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
          </div>
          <button className={styles.button}>
            <span className={styles.buttonText}>VIEW DETAILS</span>
          </button>
        </div>
        <div
          className={styles.card}
          // data-aos="flip-right"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
        >
          <div className={styles.image}>
            <img src={"./bannerImage.png"} alt="card" />
          </div>
          <div className={styles.title}>Card Title</div>
          <div className={styles.overviewText}>
            {" "}
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
          </div>
          <button className={styles.button}>
            <span className={styles.buttonText}>VIEW DETAILS</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
