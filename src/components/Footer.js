import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Player component and music created by{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://geniusandcourage.com"
        >
          GAC
        </a>
      </p>
      {/* <p>
        Have a suggestion?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://geniusandcourage.com"
        >
          Contribute{" "}
        </a>
        to project!
      </p> */}
    </div>
  );
};

export default Footer;
