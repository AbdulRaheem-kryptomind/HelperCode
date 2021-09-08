import React, { useState } from "react";
import Slider from "./menu";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
const Navigation = () => {
  const router = useRouter();
  const [menuOpenState, setMenuOpenState] = useState(false);
  const stateChangeHandler = (newState) => setMenuOpenState(newState.isOpen);
  const handleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <Link href="/">
            <img className={styles.logo} src="/logo.svg" />
          </Link>
        </div>

        <div className={styles.middleWrapper}>
            <Link href="/">
            <a className={`${router.pathname === "/" ? styles.activeLink : styles.menuItem} `}>Home</a>
            </Link>
            <Link href="/product">
              <a className={`${router.pathname === "/product" ? styles.activeLink : styles.menuItem} `}>Products</a>
            </Link>
            <Link href="/contact">
            <a className={`${router.pathname === "/contact" ? styles.activeLink : styles.menuItem} `}>Support</a>
            </Link>
            {/* <Link href="/support">
            <a className={`${router.pathname === "/support" ? styles.activeLink : styles.menuItem} `}>Support</a>
            </Link> */}
            <Link href="/about">
            <a className={`${router.pathname === "/about" ? styles.activeLink : styles.menuItem} `}>About</a>
            </Link>
            <Link href="/news">
            <a className={`${router.pathname === "/news" ? styles.activeLink : styles.menuItem} `}>News</a>
            </Link>
        </div>
        <div className={styles.rightWrapper}>
          <Link href="/download">
            <a className={styles.buttonWrapper}>
              <button className={styles.button}>
                <span className={styles.text}>Download</span>
              </button>
            </a>
          </Link>
          <div className={styles.menuIcon} onClick={handleMenu}>
            <img src={"./Icon-menu.svg"} />
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
