import React, { useState } from "react";
import styles from "./genericButton.module.scss";

const GenericButton = ({ title, onClick, icon, inline, fontsize,iconActive }) => {
  const [hovered, sethovered] = useState(false);
  const handleActive = (state) => {
    sethovered(state);
  };
  return (
    <div className={styles.buttonWrapper} onClick={onClick}>
      <button
        className={styles.button}
        style={{
          background: inline && hovered ? "#E48D0F" : "",
          borderColor: inline ? "#E48D0F" : "",
        }}
        onMouseOver={() => handleActive(true)}
        onMouseOut={() => handleActive(false)}
      >
        {icon && (
          <>
            {hovered ? (
              <img
                src={iconActive}
                width="10px"
                height="15px"
                alt="genericButton"
              />
            ) : (
              <img src={icon} width="10px" height="15px" alt="genericButton" />
            )}
          </>
        )}
        <span
          className={styles.text}
          style={{ fontSize: `${fontsize ? fontsize : ""}` }}
        >
          {title}
        </span>
      </button>
    </div>
  );
};

export default GenericButton;
