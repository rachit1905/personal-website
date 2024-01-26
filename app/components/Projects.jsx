import React from "react";
import styles from "../styles/projects.module.css";
import Image from "next/image";
import Link from "next/link";
import file from "../../public/projectlist.json";

const Projects = () => {
  let projects = file.data;
  return (
    <div className={`${styles.container} hide`} id="Projects">
      <span className={styles.heading}>Projects</span>
      <div className={styles.display}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <Image
                src={project.image}
                className={styles.projectImage}
                width={project.width}
                height={project.height}
                priority={true}
                unoptimized
              />
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectDescription}>
                {project.description}
              </span>
              <div className={styles.techContainer}>
                <label>Made Using: </label>
                <span className={styles.technologies}>
                  {project.tech.join(", ")}
                </span>
              </div>
              {project.link != 0 && (
                <Link href={project.link} className={styles.projectLink}>
                  Github
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
