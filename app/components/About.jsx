import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={`${styles.container} hide`} id="About">
      <div className={styles.img}>
        <Image
          src="/me3.jpg"
          className={styles.me}
          width="3000"
          height="4000"
          unoptimized
        ></Image>
      </div>
      <div className={styles.text}>
        <p>
          I am a High School Student with a passion for Coding and Technology. I
          have experience in C++, Java and Python. I am also proficient in Web
          Dev using HTML, CSS, JS, React and Next.js. I constantly keep myself
          updated with the Latest Skills and am keen to Learn new things.
        </p>
      </div>
    </section>
  );
};

export default About;
