import Section from "@/components/Section";
import DownloadButton from "@/components/DownloadButton";

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
          <p>Contenido de proyectos...</p>
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
