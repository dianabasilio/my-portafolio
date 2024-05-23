import React from "react";
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cv.module.scss";
import CvSection from "@/components/CvSection/CvSection";

const contact = (
  <div className={styles.contact}>
    <div>
      <Button
        href={"https://www.linkedin.com/in/diana-karen-basilio"}
        classType={"icon-no-border"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <p>dianabasilio99@gmail.com</p>
      </Button>
    </div>
    <div>
      <Button
        href={"https://www.linkedin.com/in/diana-karen-basilio"}
        classType={"icon-no-border"}
      >
        <FontAwesomeIcon icon={faPhone} />
        <p>+52 8180199305</p>
      </Button>
    </div>
    <div>
      <Button
        href={"https://www.linkedin.com/in/diana-karen-basilio"}
        classType={"icon-no-border"}
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <p>https://www.linkedin.com/in/diana-karen-basilio</p>
      </Button>
    </div>
    <div>
      <Button
        href={"https://github.com/dianabasilio"}
        classType={"icon-no-border"}
      >
        <FontAwesomeIcon icon={faGithub} />
        <p>https://github.com/dianabasilio</p>
      </Button>
    </div>
  </div>
);

const experience = (
  <div>
    <CvSection
      title="EXPERIENCE"
      subtitle="Full Stack Software Developer"
      when="May 2022 - Now"
      place="DEACERO, mty N.L."
      items={[
        "Developed from 0 an online store platform (e-commerce) for employees with React js, Typescript, Javascript, Loopback, PostgreSQL.",
        "Covered 90% of the scenarios with testing in Jest and React testing library.",
        "Dockerized and integrate ci/cd to deploy the backend and frontend to amazon web services.",
        "Implemented Openpay to make secure payments within the platform.",
        "Worked in an agile environment with Jira and daylies.",
        "Constant communication with designers using Figma and stakeholders to solve doubts.",
        "Google Cloud Plataform introduction and Develop other plataforms using Next js, Python etc.",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Full Stack Software Developer"
      when="Mar 2021 - Apr 2022"
      place="Industronic, mty N.L."
      items={[
        "Internship using Ruby on Rails, then PHP with Laravel, database with mysql and postgresql. Created new code for the back-end and front-end developing the graphic user interface with html, css, javascript and jquery that helped to create a energy monitor online interface.",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Internship Process engineering"
      when="Jan 2020 - Jul 2020"
      place="DENSO, mty N.L."
      items={[
        "Responsible for the documentation of processes for the new production line of an automotive company constantly speaking in English with employees.",
      ]}
    />
    STEM and Mathematics Teacher
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="STEM Teacher"
      when="Jan 2018-Dec 2018"
      place="O-Tech Academy, mty N.L."
      items={[
        "Teach English classes about electronics, 3D printing, Arduino, video game programming and EmBot Robots, STEM in multiple schools around Nuevo León. ",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Mathematics Teacher"
      when="Jan 2015-Jan 2016"
      place="KUMON, mty N.L."
      items={[
        "Teach and solve doubts that students had about advanced mathematics.",
      ]}
    />
  </div>
);

const courses = (
  <div>
    <CvSection
      title="COURSES"
      subtitle="Web programming Full-Stack (Bootcamp/Intensive Course)"
      when="Jun 2021- Dec 2021"
      place="Digital House, Remote"
      items={[
        " Create websites and web systems using programming languages (HTML, CSS, JavaScript, Node.js, React.js and express). Work as a team using agile methodologies (SCRUM) based on participatory methods. Dedicating to this course 4 hours a day. (Diploma)",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Introduction to digital skills Certificate"
      when="May 2021"
      place="FESE, Remote"
      items={[
        " Create websites and web systems using programming languages (HTML, CSS, JavaScript, Node.js, React.js and express). Work as a team using agile methodologies (SCRUM) based on participatory methods. Dedicating to this course 4 hours a day. (Diploma)",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Docker the practical Guide"
      when="Feb 2023 - Apr 2023"
      place="UDEMY, Remote"
      items={[
        "23.5 hours.",
        "Learn what Docker and Kubernetes are and why you might want to use them.Learn about Container Networking with Docker Networks and DNS Service Discovery.Understand complex topics like managing and persisting data with Volumes",
      ]}
    />
    <div className={styles["dashed-line"]}></div>
    <CvSection
      subtitle="Automation and Control-Diplomat"
      when="Mar 2019 - Sep 2019"
      place="FIME, mty, N.L."
      items={["90 hours, PLC programming"]}
    />
  </div>
);

const Index: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h2>DIANA BASILIO</h2>
          <div className={styles.position}>Software Developer</div>
        </div>
        <div className={styles.sides}>
          <div className={styles.side1}>
            {contact}
            {experience}
            {courses}
          </div>
          <div className={styles.side2}>
            <CvSection
              subtitle="Python Course"
              when="Jun 2020"
              place="UDEMY, Remote"
              items={["20 hours, from Zero to Hero"]}
              side2={true}
            />
            <CvSection
              subtitle="Certified LabVIEW Associate Developer"
              when="Jan 2018 - May 2018"
              place="National Instruments, ITESM"
              items={["20 hours, from Zero to Hero"]}
              side2={true}
            />
            <CvSection
              title="Education"
              subtitle="Mechatronics Engineering Degree"
              when="Sep 2017 - Dec 2021"
              place="Universidad Valle de México"
              items={["20 hours, from Zero to Hero"]}
              side2={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
