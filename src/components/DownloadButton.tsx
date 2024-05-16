import React from "react";
import styles from "@/styles/DownloadButton.module.scss";

interface DownloadButtonProps {
  fileName: string;
  children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName,
  children,
}) => {
  const handleDownload = () => {
    const url = `/${fileName}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button className={styles["download-button"]} onClick={handleDownload}>
      {children}
    </button>
  );
};

export default DownloadButton;
