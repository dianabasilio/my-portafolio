import React from "react";
import styles from "@/styles/MailTo.module.scss";

interface MailToProps {
  email: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
}

const MailTo: React.FC<MailToProps> = ({
  email,
  subject = "",
  body = "",
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={styles.mailto}>
      {children}
    </a>
  );
};

export default MailTo;
