import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./CvSection.module.scss";

interface CvSectionProps {
  title?: string;
  side2?: boolean;
  subtitle: string;
  when: string;
  place: string;
  items?: string[];
}

const CvSection: React.FC<CvSectionProps> = ({
  title,
  subtitle,
  when,
  place,
  items,
  side2,
}) => {
  const whenPlaceSide = side2 ? "when-place-s2" : "when-place-s1";
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={`${styles["when-place"]} ${styles[whenPlaceSide]}`}>
        <div>
          <FontAwesomeIcon
            icon={faCalendar}
            className={styles["fa-icon-when-place"]}
          />
          <p>{when}</p>
        </div>
        {side2 ? (
          <div className={styles["place-s2"]}>{place}</div>
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles["fa-icon-when-place"]}
            />
            <p>{place}</p>
          </div>
        )}
      </div>
      <ul className={styles.ul}>
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default CvSection;
