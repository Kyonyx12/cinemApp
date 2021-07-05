import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h4>
          Develop by{" "}
          <a
            href="https://joseantoniolopezramos.site/"
            style={{ color: "#15c6b2" }}
          >
            Antonio Lopez
          </a>
        </h4>
        <h4>
          Powered by{" "}
          <a href="https://www.themoviedb.org/" style={{ color: "#10b6de" }}>
            TheMovieDB
          </a>
        </h4>
      </div>
    </div>
  );
}
