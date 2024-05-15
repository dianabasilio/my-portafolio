import styles from "@/styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Diana Basilio</p>
    </footer>
  );
};

export default Footer;
