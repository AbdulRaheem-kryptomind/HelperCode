import Link from "next/link";
import DynamicImage from "./dynamicFooterIcons";
import styles from "./footer.module.scss";

function FooterLarge() {
  return (
    <footer id="myFooter" className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src={"./logo.svg"} className={styles.img} />
          <p> CryptoKara multiple blockchain currency wallet</p>
          <div className={styles.socialContainer}>
            <DynamicImage name="facebook" />
            <DynamicImage name="linkdin" />
            <DynamicImage name="twitter" />
            <DynamicImage name="youtube" />
          </div>
        </div>
        <div className={styles.footerMiddle}>
          <div className={styles.column}>
            <h3>Important Links</h3>
            <Link href="/">
              <div className={styles.link}>Landingpage</div>
            </Link>
            <Link href="/news">
              <div className={styles.link}>News</div>
            </Link>
            <Link href="/download">
              <div className={styles.link}>Download</div>
            </Link>
            <Link href="/product">
              <div className={styles.link}>Product</div>
            </Link>
          </div>
        </div>
        {/* <div className={styles.footerMiddle}>
          <div className={styles.column}>
            <h3>Services</h3>

            <div className={styles.link}>Design</div>

            <div className={styles.link}>Themes</div>
          </div>
        </div> */}
        <div className={styles.footerMiddle}>
          <div className={styles.column}>
            <h3>Company Info</h3>
            <Link href="/contact">
              <div className={styles.link}>Support</div>
            </Link>
            <Link href="/about">
              <div className={styles.link}>About Us</div>
            </Link>
            {/* <Link href="/support">
              <div className={styles.link}>Support</div>
            </Link> */}
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.column}>
            <h3>Subscribe to CryptoKara</h3>
            <div className={styles.text}>
              Sign up to receive our newsletter with updates about your wallet.
            </div>
            <div className={styles.inputWrapper}>
              <input
                type={"text"}
                name={"subscribe"}
                className={styles.input}
                placeholder={"Your Email Address"}
                // onChange={onChange}
              />
              <a className={styles.buttonWrapper}>
                <button className={styles.button}>
                  <span className={styles.text}>Subscribe</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <text>Copyright © 2021 Cryptokara , Inc.</text>
      </div>
    </footer>
  );
}

export default FooterLarge;
