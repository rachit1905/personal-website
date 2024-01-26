import React from "react";
import styles from "../styles/greet.module.css";

const Greet = () => {
  return (
    <div className={`${styles.container} hide`}>
      <span className={styles.span}>
        Hi! I am
        <br />
        <span className={styles.highlight}>Rachit</span>
      </span>
    </div>
  );
};

export default Greet;
