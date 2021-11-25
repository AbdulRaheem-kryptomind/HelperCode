import React from 'react'
import Navigation from '../sidebarWrapperAdminPanel/navigationSideBar/index';
import SideBar from './sidebar';
import styles from "./sidebarWrapper.module.scss";

const SideBarWrapper = ({children}) => {
    return (
        <div className={styles.container}>
            <Navigation/>
            <div className={styles.left}><SideBar/></div>
            <div className={styles.right}>{children}</div>
        </div>
    )
}

export default SideBarWrapper;
