import Section from "@/components/Section";
import DownloadButton from "@/components/DownloadButton";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";

const Home: React.FC = () => {
  const projectsContent = (
    <div className="projects">
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
    </div>
  );

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
          {projectsContent}
        </Section>
        <Section id="Tech-stack" title="Tech Stack">
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
            <Tech img={"aws.png"} name="Amazon Web Services" />
            <Tech img={"postgresql.png"} name="Postgresql" />
            <Tech img={"redux.svg"} name="Redux" />
            <Tech img={"react-testing.png"} name="React Testing Library" />
            <Tech img={"gcp.png"} name="Google Cloud Plataform" />
            <Tech img={"ruby.png"} name="Ruby on Rails" />
            <Tech img={"php.png"} name="PHP" />
          </div>
        </Section>
        <Section id="Contact-me" title="Contact Me">
          <p>Contenido de contacto...</p>
        </Section>
      </main>
    </>
  );
};

export default Home;
