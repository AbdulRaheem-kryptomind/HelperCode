import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./genericButton.module.scss";

const GenericButton = ({
  title,
  onClick,
  icon,
  fontsize,
  iconActive,
  submitting,
}) => {
  const [hovered, sethovered] = useState(false);
  const handleActive = (state) => {
    sethovered(state);
  };
  let renderBtn = () => {
    if (submitting) {
      return (
        <>
          <FontAwesomeIcon icon={faSyncAlt} spin className={styles.loadingColor}/>{" "}
          <span
            className={styles.text}
            style={{ fontSize: `${fontsize ? fontsize : ""}` }}
          >
            Submitting...
          </span>
        </>
      );
    }
    return (
      <span
        className={styles.text}
        style={{ fontSize: `${fontsize ? fontsize : ""}` }}
      >
        {title}
      </span>
    );
  };
  return (
    <div className={styles.buttonWrapper} onClick={onClick}>
      <button
        className={styles.button}
        onMouseOver={() => handleActive(true)}
        onMouseOut={() => handleActive(false)}
      >
        {!submitting&&icon && (
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

        {renderBtn()}
      </button>
    </div>
  );
};

export default GenericButton;
