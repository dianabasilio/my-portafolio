import Section from "@/components/Section";

const Home: React.FC = () => {
  return (
    <>
      <main>
        <Section id="About-me" title="About Me">
          <p>Contenido sobre mí...</p>
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
