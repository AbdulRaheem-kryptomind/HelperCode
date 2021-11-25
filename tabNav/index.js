import React from "react";
import styles from "./tabNav.module.scss";


export default function TabNav({ heading, info, children, showDivider }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowWrapper}>
        <div className={styles.textCol}>
          <div className={styles.heading}>{heading || " "}</div>
          <div className={styles.info}>{info || " "}</div>
        </div>
        <img src={"/assets/notificationBell-icon.svg"} style={{cursor:"pointer",width:"4%"}}/>
        <img src={"/assets/person-icon.svg"} style={{cursor:"pointer",width:"4%"}}/>
        <select className={styles.selector} name="languages" id="languages">
          <option value="English">English / USD</option>
        </select>
      </div>
    </div>
  );
}
