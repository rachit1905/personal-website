import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.container} id="About">
      <div className={styles.img}>
        <Image
          src="/me3.jpg"
          className={styles.me}
          width="3000"
          height="4000"
        ></Image>
      </div>
      <div className={styles.text}>
        <p>
          I am a high school student at with a passion for coding and
          technology. I have experience in C++, Java and Python. I am also
          proficient in web dev using HTML, CSS, JS, React and Next.js.
        </p>
      </div>
    </section>
  );
};

export default About;
