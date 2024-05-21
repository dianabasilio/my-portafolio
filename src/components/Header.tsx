import { useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("About-me");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About-me", "Projects", "Tech-stack", "Contact-me"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {["About-me", "Projects", "Tech-stack", "Contact-me"].map((section) => (
          <div
            key={section}
            className={`${activeSection === section ? styles.active : ""}`}
          >
            <a href={`#${section}`} className={styles.a}>
              {section.split("-").join(" ")}
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
