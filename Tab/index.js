import React from "react";

import styles from "./tab.module.scss";

const Tabs = ({visibleTab , setVisibleTab , data}) => {
  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id
          ? `${styles.tabTitle} ${styles.tabTitleActive}`
          : styles.tabTitle
      }
    >
      {item.tabTitle}
    </li>
  ));
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsTitles}>{listTitles}</ul>
    </div>
  );
};

export default Tabs;
