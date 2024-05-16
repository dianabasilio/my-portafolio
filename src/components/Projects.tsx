import React from "react";
import styles from "@/styles/Projects.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Technology {
  icon: string;
  name: string;
}

interface ProjectsProps {
  img: string;
  title: string;
  technologies: Technology[];
  projectUrl: string;
  githubUrl: string;
  children?: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({
  img,
  title,
  technologies,
  projectUrl,
  githubUrl,
  children,
}) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.technology}>
            <img
              className={styles.icon}
              src={`/${tech.icon}`}
              alt={tech.icon}
            />
            {tech.name}
          </div>
        ))}
      </div>
      <div className={styles["view"]}>
        <Link href={githubUrl} className={styles.secondary}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href={projectUrl} className={styles.primary}>
          View Live
        </Link>
      </div>

      {children}
    </div>
  );
};

export default Projects;
