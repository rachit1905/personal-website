import React from 'react'
import styles from "../styles/header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
      <div className={styles.header}>
          <button className={styles.links}>
              <Link href="#About">
              About Me
              </Link>
          </button>
          <button className={styles.links}>
              <Link href="#Projects">
              Projects
              </Link>
          </button>
          <button className={styles.links}>
              <Link href="#Achievements">
              Achievements
              </Link>
          </button>
          <button className={styles.contact}>
              <Link href="#Contact">
                  Contact Me
              </Link>
          </button>
    </div>
  )
}

export default Header