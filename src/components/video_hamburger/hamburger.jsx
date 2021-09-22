import React from "react";
import styles from "./hamburger.module.css";

export const toggleMenu = () => {
  console.log("Hello❓");
};

const HamburgerMenu = () => {
  return (
    <>
      <div className={styles.hamburgerMenu}>
        <a className={styles.item} href="/">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </a>
        <div className={styles.item}>
          <i className="fas fa-video"></i>
          <span>구독</span>
        </div>
        <div className={styles.item}>
          <i className="fas fa-history"></i>
          <span>기록</span>
        </div>
        <div className={styles.item}>
          <i className="fas fa-cog"></i>
          <span>설정</span>
        </div>
      </div>
      <div className={styles.blind}></div>
      <span className={styles.maker}>© 2021 IvanSelah</span>
    </>
  );
};

export default HamburgerMenu;
