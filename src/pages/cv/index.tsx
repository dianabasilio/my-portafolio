import React from "react";
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Cv.module.scss";
import CvSection from "@/components/CvSection/CvSection";

const contact = (
  <div className={styles["contact-container"]}>
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
          href={"https://github.com/dianabasilio"}
          classType={"icon-no-border"}
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>https://github.com/dianabasilio</p>
        </Button>
      </div>
    </div>
    <div className={styles.contact}>
      <div>
        <Button
          href={"https://my-portafolio-virid.vercel.app"}
          classType={"icon-no-border"}
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <p>https://my-portafolio-virid.vercel.app</p>
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
        "Implemented Openpay for payments and Auth0 for authentication and authorization solutions to make the plataform more secure.",
        "Worked in an agile environment with Jira and daylies, github pull requests following best practices in writing reliable and maintainable code.",
        "Constant communication with designers using Figma and stakeholders to solve doubts.",
        "Designed and implemented AI-driven solutions, including an image recognition and analysis system that generates JSON data for intelligent matching with Deacero's article database via semantic search (embedding-based). Contributed to the development of user platforms using Next.js and Python.",
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
  </div>
);

const Index: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h2>DIANA BASILIO</h2>
          <div className={styles.position}>Software Developer</div>
          {contact}
        </div>
        <div className={styles.sides}>
          <div className={styles.side1}>
            {experience}
            {courses}
          </div>
          <div className={styles.side2}>
            <CvSection
              subtitle="Next Js 15 & React"
              when="Mar 2025 - Apr 2025"
              place="UDEMY, Remote"
              items={["40.5 hours"]}
              side2={true}
            />
            <CvSection
              subtitle="Python Course"
              when="Jun 2020 - Aug 2020"
              place="UDEMY, Remote"
              side2={true}
            />
            <CvSection
              subtitle="Certified LabVIEW Associate Developer"
              when="Jan 2018 - May 2018"
              place="National Instruments, ITESM"
              side2={true}
            />
            <CvSection
              subtitle="Automation and Control-Diplomat"
              when="Mar 2019 - Sep 2019"
              place="FIME, mty, N.L."
              items={["90 hours, PLC programming"]}
              side2={true}
            />
            <CvSection
              title="EDUCATION"
              subtitle="Mechatronics Engineering Degree"
              when="Sep 2017 - Dec 2021"
              place="Universidad Del Valle De Mexico"
              side2={true}
            />
            <CvSection
              title="TECH STACK"
              roundedItems={[
                "Javascript",
                "TypeScript",
                "Python",
                "ReactJs",
                "NodeJs",
                "CSS/HTML",
                "ExpressJs",
                "NextJs",
                "Remix",
                "AWS",
                "GCP",
                "git",
                "Docker",
                "PHP",
                "Redux",
                "Relay",
                "GraphQL",
                "Webpack",
                "Jest",
                "Ruby on Rails",
                "React Testing Library",
              ]}
            />
            <CvSection
              title="LANGUAGES"
              items={["Spanish-Native", "English-C1", "French-A2"]}
              side2={true}
            />
            <CvSection
              title="MANAGE OF"
              roundedItems={[
                "Visual Studio Code",
                "Microsoft Office",
                "Mac OS",
                "Windows",
                "LINUX",
                "Auth0",
                "Github",
                "Gitlab",
                "Jira",
                "Cursor/Copilot/AI",
                "Figma",
                "Bitbucket",
                "Raspberry Pi",
                "Agile development",
              ]}
              side2={true}
            />
            <CvSection
              title="VALUES"
              roundedItems={[
                "Commitment",
                "Adaptability",
                "Responsibility",
                "Communication",
                "Collaboration",
                "Aim for extraordinary",
                "Empathy",
                "Teamwork",
                "Improvement",
              ]}
              side2={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
