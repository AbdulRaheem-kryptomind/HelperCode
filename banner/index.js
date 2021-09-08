import React from "react";
import styles from "./analytics.module.scss";

const Analytics = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentWrapper}>
            <div className={styles.title}>ANALYTICS</div>
            <div className={styles.heading}>
              Analyze your data with our analyze tools.
            </div>
            <div className={styles.text}>
              Self-service data analytics software that lets you create visually
              appealing data visualizations and insightful dashboards in
              minutes.
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.imgContainer} src={"/analytics.png"} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
