import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import styles from "./menu.module.scss";

const Slider = ({ menuOpenState, stateChangeHandler, setMenuOpenState }) => {
  return (
    <Menu
      right
      disableAutoFocus
      customBurgerIcon={false}
      isOpen={menuOpenState}
      onStateChange={(state) => stateChangeHandler(state)}
      itemListElement="div"
    >
      <div className="bm-item">
        <Link href="/market">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            {/* <div className="burger-menu-link__icon">
              <img src="/stat-menu.svg" alt="market" />
            </div> */}
            <div className="burger-menu-link__text">Home</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className="burger-menu-link__text">Products</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className="burger-menu-link__text">Contact US</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className="burger-menu-link__text">Support</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className="burger-menu-link__text">About</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className="burger-menu-link__text">News</div>
          </div>
        </Link>
      </div>
      <div className="bm-item">
        <Link href="/">
          <div
            onClick={() => setMenuOpenState(false)}
            className="burger-menu-link"
          >
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <span className={styles.text}>Download</span>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </Menu>
  );
};

export default Slider;
