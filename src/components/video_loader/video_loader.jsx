import React from "react";
import styles from "./video_loader.module.css";

const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader}></div>
  </div>
);

export default Loader;
