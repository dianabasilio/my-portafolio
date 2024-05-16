import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Section from "@/components/Section";
import DownloadButton from "@/components/DownloadButton";
import Projects from "@/components/Projects";

const Home: React.FC = () => {
  return (
    <>
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
          <div className="projects">
            <Projects
              img={"/remix-app.jpeg"}
              title={"Remix Users App"}
              projectUrl={
                "https://salty-lowlands-25269-53ed27647c88.herokuapp.com"
              }
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
                  name: "React",
                },
                {
                  icon: "js.png",
                  name: "JavaScript",
                },
              ]}
            ></Projects>

            <Projects
              img={"/samandro.jpeg"}
              title={"Itinerary Next js app"}
              projectUrl={"https://itinerary-app-9886f0dc26be.herokuapp.com"}
              githubUrl={
                "https://github.com/dianabasilio/sam-villareal-itinerary"
              }
              technologies={[
                {
                  icon: "js.png",
                  name: "JavaScript",
                },
                {
                  icon: "reactjs.png",
                  name: "React",
                },
              ]}
            ></Projects>
          </div>
        </Section>
        <Section id="Tech-stack" title="Tech Stack">
          <p>Contenido de tech stack...</p>
        </Section>
        <Section id="Contact-me" title="Contact Me">
          <p>Contenido de contacto...</p>
        </Section>
      </main>
    </>
  );
};

export default Home;
