import React from "react";
import styles from "@/styles/Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";
interface Technology {
  icon: string;
  name: string;
}

interface ProjectsProps {
  img: string;
  title: string;
  technologies: Technology[];
  githubUrl?: string;
  projectUrl?: string;
  isPrivate?: boolean;
  children?: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({
  img,
  title,
  technologies,
  projectUrl,
  githubUrl,
  isPrivate,
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
        {isPrivate ? (
          <div className={styles["private-message"]}>
            <FontAwesomeIcon icon={faGithub} />
            <span>Repositorio privado</span>
          </div>
        ) : (
          githubUrl && (
            <div className={styles["button"]}>
              <Button href={githubUrl} classType={"secondary"}>
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </div>
          )
        )}
        {projectUrl && (
          <div className={styles["button"]}>
            <Button href={projectUrl} classType={"primary"}>
              View Live
            </Button>
          </div>
        )}
      </div>

      {children}
    </div>
  );
};

export default Projects;
