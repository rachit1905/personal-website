"use client";
import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  function scroll(href) {
    window.scrollTo({
      top: document.getElementById(href).offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.header}>
      <button className={styles.links} onClick={() => scroll("About")}>
        About Me
      </button>
      <button className={styles.links} onClick={() => scroll("Projects")}>
        Projects
      </button>
      {/* <button className={styles.links}>
        <Link href="#Achievements">Achievements</Link>
      </button> */}
      <button className={styles.contact} onClick={() => scroll("Contact")}>
        Contact Me
      </button>
    </div>
  );
};

export default Header;
