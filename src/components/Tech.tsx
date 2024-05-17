import React from "react";
import styles from "@/styles/Tech.module.scss";

interface TechProps {
  img: string;
  name: string;
}

const Tech: React.FC<TechProps> = ({ img, name }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={img} />
      <div>{name}</div>
    </div>
  );
};

export default Tech;
