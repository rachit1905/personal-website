import React from "react";
import file from "../../public/achievements.json";
import styles from "../styles/achievements.module.css";

const Achievements = () => {
  let achievements = file.data;
  return (
    <div className={`${styles.container} hide`}>
      <span className={styles.heading}>Achievements</span>
      <ul className="list">
        {achievements.map((achievement, ind) => {
          return (
            <li key={ind} className={styles.listitem}>
              {achievement.desc}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Achievements;
