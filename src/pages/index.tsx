import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Section from "@/components/Section";
import DownloadButton from "@/components/DownloadButton";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Button from "@/components/Button";
import MailTo from "@/components/MailTo";

const Home: React.FC = () => {
  const projectsContent = (
    <div className="projects">
      <Projects
        img={"/NextFood.jpeg"}
        title={"NextLevel Food App"}
        projectUrl={"https://nextlevelfood-zoa4.onrender.com"}
        githubUrl={"https://github.com/dianabasilio/NextLevelFood"}
        technologies={[
          {
            icon: "nextjs.png",
            name: "Next js",
          },
          {
            icon: "typescript.png",
            name: "Typescript",
          },
          {
            icon: "reactjs.png",
            name: "React js",
          },
        ]}
      />
      <Projects
        img={"/remix-app.jpeg"}
        title={"Remix Contacts App"}
        projectUrl={"https://salty-lowlands-25269-53ed27647c88.herokuapp.com"}
        githubUrl={"https://github.com/dianabasilio/remix"}
        technologies={[
          {
            icon: "typescript.png",
            name: "Typescript",
          },
          {
            icon: "remix.png",
            name: "Remix",
          },
          {
            icon: "reactjs.png",
            name: "React js",
          },
          {
            icon: "js.png",
            name: "JavaScript",
          },
        ]}
      />
      <Projects
        img={"/samandro.jpeg"}
        title={"Itinerary Next js App"}
        projectUrl={"https://itinerary-app-9886f0dc26be.herokuapp.com"}
        githubUrl={"https://github.com/dianabasilio/sam-villareal-itinerary"}
        technologies={[
          {
            icon: "nextjs.png",
            name: "Next js",
          },
          {
            icon: "typescript.png",
            name: "Typescript",
          },
          {
            icon: "reactjs.png",
            name: "React js",
          },
        ]}
      />
      <Projects
        img={"/jewelry.jpeg"}
        title={"E-commerce Jewelry Express App"}
        githubUrl={"https://github.com/dianabasilio/grupo_3_Bijoux"}
        technologies={[
          {
            icon: "express.png",
            name: "Express js",
          },
          {
            icon: "js.png",
            name: "JavaScript",
          },
          {
            icon: "mysql.png",
            name: "MySql",
          },
        ]}
      />
      <Projects
        img={"/face.png"}
        title={"Face Recognition Python"}
        githubUrl={
          "https://github.com/dianabasilio/face_recognition_raspberry_pi"
        }
        technologies={[
          {
            icon: "python.png",
            name: "Python",
          },
          {
            icon: "raspberry.png",
            name: "Raspberry pi",
          },
        ]}
      />
      <Projects
        img={"/portafolio.jpeg"}
        title={"Portafolio Next js App"}
        projectUrl={"https://my-portafolio-rlnf.onrender.com"}
        githubUrl={"https://github.com/dianabasilio/my-portafolio"}
        technologies={[
          {
            icon: "nextjs.png",
            name: "Next js",
          },
          {
            icon: "typescript.png",
            name: "Typescript",
          },
          {
            icon: "reactjs.png",
            name: "React js",
          },
        ]}
      />
    </div>
  );

  const contactMeContent = (
    <div className="contact-me-content">
      <Button href={"https://github.com/dianabasilio"} classType={"icon"}>
        <FontAwesomeIcon icon={faGithub} className="fa-icon" />
      </Button>
      <Button
        href={"https://www.linkedin.com/in/diana-karen-basilio"}
        classType={"icon"}
      >
        <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
      </Button>
      <Button
        href={"tel:+528180199305"}
        classType={"icon"}
        tooltip={"+52 8180199305"}
      >
        <FontAwesomeIcon icon={faPhone} className="fa-icon" />
      </Button>
      <Button classType={"icon"} tooltip={"dianabasilio99@gmail.com"}>
        <MailTo email={"dianabasilio99@gmail.com"}>
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
        </MailTo>
      </Button>
    </div>
  );

  const techStackContent = (
    <div className="tech-stack-container">
      <Tech img={"reactjs.png"} name="React js" />
      <Tech img={"js.png"} name="Javascript" />
      <Tech img={"typescript.png"} name="Typescript" />
      <Tech img={"express.png"} name="Express js" />
      <Tech img={"next.svg"} name="Next js" />
      <Tech img={"remix.png"} name="Remix" />
      <Tech img={"python.png"} name="Python" />
      <Tech img={"mysql.png"} name="MySql" />
      <Tech img={"css.png"} name="CSS" />
      <Tech img={"aws.png"} name="AWS" />
      <Tech img={"docker.png"} name="Docker" />
      <Tech img={"postgresql.png"} name="Postgresql" />
      <Tech img={"redux.svg"} name="Redux" />
      <Tech img={"react-testing.png"} name="React Testing Library" />
      <Tech img={"gcp.png"} name="Google Cloud Plataform" />
      <Tech img={"ruby.png"} name="Ruby on Rails" />
      <Tech img={"php.png"} name="PHP" />
      <Tech img={"postman.png"} name="Postman" />
    </div>
  );

  return (
    <main>
      <Section id="About-me" title="">
        <div className="about-me">
          <img src="/computer.png" alt="computer" />
          <div className="about-me-content">
            <h2>Hi, my name is Diana Basilio, I am a Full Stack Developer</h2>
            <p> Let me help you with your project</p>
            <DownloadButton fileName="DianaBasilioCV.pdf">
              Download Resume
            </DownloadButton>
          </div>
        </div>
      </Section>
      <Section id="Projects" title="Projects">
        {projectsContent}
      </Section>
      <Section id="Tech-stack" title="Tech Stack">
        {techStackContent}
      </Section>
      <Section id="Contact-me" title="Contact Me">
        {contactMeContent}
      </Section>
    </main>
  );
};

export default Home;
