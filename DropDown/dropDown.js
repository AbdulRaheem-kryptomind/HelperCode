import React, { useState, useEffect, useRef } from "react";
import styles from "./dropDown.module.scss";

const DropDown = ({
  selected,
  setSelected,
  options,
  showRightIcon,
  padding,
  color,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", onClickOutSide);
    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  }, []);
  const onClickOutSide = (event) => {
    const isClickInsideElement = dropRef?.current?.contains(event.target);
    if (!isClickInsideElement) {
      setIsActive(false);
    }
  };
  return (
    <div className={styles.dropdown} ref={dropRef}>
      <div
        className={styles.dropdownbtn}
        onClick={(e) => setIsActive(!isActive)}
        style={{
          padding: padding ? `${padding}` : "",
          background: `${color?.length ? color : ""}`,
        }}
      >
        {/* {showRightIcon === false ? null : (
          <div className={styles.imgContainer}>
            <img className={styles.leftIcon} src={"/assets/XML.PNG"} />
          </div>
        )} */}
        <span>{selected}</span>
        <img
          className={styles.withRightIcon}
          src={"/assets/dropdown-arrow.svg"}
        />
      </div>

      {isActive && (
        <div className={styles.dropdowncontent}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.dropdownitems}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
