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
  tooltip?: string;
  customClass?: string; // Nueva prop para la segunda clase
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  children,
  classType = "",
  href = "",
  tooltip = "",
}) => {
  const handleClick = () => {
    if (href.startsWith("tel:")) {
      window.location.href = href;
    }
  };

  const tooltipClass = tooltip ? "tooltip" : "";

  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[classType]} ${styles[tooltipClass]}`}
      data-tooltip={tooltip}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href} passHref onClick={handleClick}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
