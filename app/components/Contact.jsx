import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <span className={styles.heading}>Want to know more?</span>
      <Link
        href="https://github.com/rachit1905"
        target="_blank"
        className={styles.icon}
      >
        <Image
          priority
          src="/github.svg"
          alt="Github Logo"
          width={100}
          height={100}
        />
        <span>Check out my code</span>
      </Link>
      <Link
        href="mailto:rachitpagarwal@gmail.com"
        target="_blank"
        className={styles.icon}
      >
        <Image
          priority
          src="/mail.svg"
          alt="Mail Logo"
          width={100}
          height={100}
        />
        <span>
          Mail Me: <span style={{fontWeight:"300", textDecoration:"underline"}}>rachitpagarwal@gmail.com</span>
        </span>
      </Link>
      {/* <span>OR</span>
      <div>
        <span>Send a Message</span> <br />
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" />
        <br />
        <label htmlFor="msg">Your Message</label>
        <br />
        <input type="text" name="msg" />
        <br />
        <button type="submit">Send</button>
      </div> */}
    </div>
  );
};

export default Contact;
