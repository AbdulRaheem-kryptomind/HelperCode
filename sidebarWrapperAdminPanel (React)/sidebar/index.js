import React from "react";
import styles from "./sidebar.module.scss";
import {Link,useLocation} from "react-router-dom";



const SideBar = ({mobileView}) => {
  const router = useLocation()
  console.log("router",router.pathname,router.pathname.startsWith("setting-"));
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!mobileView&& <Link to="/"><div className={styles.logo}><img src={"/assets/logo-name.svg"}/></div> </Link>}
        
          <Link to="/analytics" className={`${router.pathname === "/analytics" ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/analyticsGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/analyticsWhite.svg"}/></div>
            <div className={styles.text}>Analytics</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
          <Link to="/kyc" className={`${router.pathname === "/kyc" ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/kycGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/kycWhite.svg"}/></div>
            <div className={styles.text}>KYC Management</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
          <Link to="/merchant" className={`${router.pathname === "/merchant" ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/merchantGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/merchantWhite.svg"}/></div>
            <div className={styles.text}>Merchants Management</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
        <Link to="/api-keys" className={`${router.pathname === "/api-keys" ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/apiGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/apiWhite.svg"}/></div>
            <div className={styles.text}>API Keys</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
          <Link to="/report-escrow" className={`${router.pathname === "/report-escrow" || router.pathname === "/report-instant"  ?  styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/reportGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/reportWhite.svg"}/></div>
            <div className={styles.text}>Reports</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
          <Link to="/user" className={`${router.pathname === "/user" ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/userGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/userWhite.svg"}/></div>
            <div className={styles.text}>Users</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
          <Link to="/setting-escrowFee" className={`${router.pathname.startsWith("/setting-") ? styles.activeLink : styles.tab} `}>
            <div className={styles.icon}><img src={"/assets/settingGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/settingWhite.svg"}/></div>
            <div className={styles.text}>Settings</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
      </div>
          <Link to="/" className={`${router.pathname === "/1" ? styles.activeLink : styles.signout} `}>
            <div className={styles.icon}><img src={"/assets/signoutGrey.svg"}/></div>
            <div className={styles.iconActive}>< img src={"/assets/signoutWhite.svg"}/></div>
            <div className={styles.text}>Logout</div>
            < img  className={styles.rightIcon} src={"/assets/activeNavIcon.svg"}/>
          </Link>
    </div>
  );
};

export default SideBar;
