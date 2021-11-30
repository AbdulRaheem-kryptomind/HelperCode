import React from "react";
import styles from "./CommonTable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSyncAlt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export default function CommonTable({
  heading,
  data,
  maxHeight,
  getId,
  column,
  submitting,
}) {
  const getItem = (dataItem, columnItem) => {
    if (columnItem.render) {
      return columnItem.render(dataItem[columnItem.key], dataItem);
    } else {
      // return <div>{dataItem[columnItem.key]}</div>;
      return (
        <span className={styles.coinWrapper}>{dataItem[columnItem.key]}</span>
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.wrapper} style={{ maxHeight: maxHeight }}>
        <div className={styles.cardLabel}>
          {column &&
            column.map((item, i) => {
              return (
                <div
                  className={styles.container}
                  key={i}
                  style={{
                    minWidth: `${100 / column.length}%`,
                    maxWidth: `${100 / column.length}%`,
                  }}
                >
                  <span className={styles.coinWrapper}>{item.title}</span>
                </div>
              );
            })}
        </div>
        {submitting ? (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}></div>
          </div>
        ) : (
          <>
            {data.length > 0 ? (
             <div className={styles.cardWrapper}>
                {data.map((dataItem) => (
               
                    <div className={styles.card}>
                      {column.map((columnItem, index) => {
                        return (
                          <div
                            className={styles.container}
                            style={{
                              minWidth: `${100 / column.length}%`,
                              maxWidth: `${100 / column.length}%`,
                            }}
                          >
                            {getItem(dataItem, columnItem)}
                          </div>
                        );
                      })}
                    </div>
                
                ))}
                </div>
            ) : (
              <div className={styles.emptyContainer}>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className={styles.empty}
                />
                <span className={styles.emptyText}>No Data Available</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// const selectIdHandler = (id)=>{
//   getId(rowItem.value)}
// }
