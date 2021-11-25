import React, { useState } from "react";
import Slider from "./menu";
import styles from "./navigation.module.scss";
import { Link, useLocation } from "react-router-dom";



const Navigation = () => {
  const router = useLocation();
  const [menuOpenState, setMenuOpenState] = useState(false);
  const stateChangeHandler = (newState) => setMenuOpenState(newState.isOpen);
  const handleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <Link to={"/"} className={styles.logo}>
            <img src={"/assets/logo-name.svg"} />
          </Link>
        </div>
        <div className={styles.middleWrapper}></div>
        <div className={styles.rightWrapper}>
          <div className={styles.menuIcon} onClick={handleMenu}>
            <img src={"/assets/Icon-menu.svg"} />
          </div>
        </div>
      </div>
      <Slider
        menuOpenState={menuOpenState}
        setMenuOpenState={setMenuOpenState}
        stateChangeHandler={stateChangeHandler}
      />
    </>
  );
};

export default Navigation;
