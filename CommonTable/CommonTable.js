import React from "react";
import styles from "./CommonTable.module.scss";

export default function CommonTable({
  heading,
  data,
  maxHeight,
  getId,
  column,
}) {

  const getItem = (dataItem, columnItem) => {
    if (columnItem.render) {
      return columnItem.render(dataItem[columnItem.key],dataItem);
    } else {
      // return <div>{dataItem[columnItem.key]}</div>;
      return <span className={styles.coinWrapper}>{dataItem[columnItem.key]}</span>;
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
    </div>
  );
}

// const selectIdHandler = (id)=>{
//   getId(rowItem.value)}
// }
