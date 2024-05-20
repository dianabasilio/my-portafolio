import React from "react";
import Link from "next/link";
import styles from "@/styles/Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  classType?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  children,
  classType = "",
  href,
}) => {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[classType]}`}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
