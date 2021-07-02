import React from "react";
import Link from "next/link";
import { BiUserCircle, BiSearchAlt } from "react-icons/bi";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>CinemApp</h1>
        <div className={styles.routes}>
          <ul className={styles.ul}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/tv">
                <a>Tv Shows</a>
              </Link>
            </li>
            <li>
              <Link href="/movie">
                <a>Movies</a>
              </Link>
            </li>
            <li>
              <Link href="/upcoming">
                <a>Upcoming</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.tools}>
            <li className={styles.toolBg}>
              <BiSearchAlt size="1.75rem" color="#15c6b2" />
            </li>
            <li className={styles.toolBg}>
              <BiUserCircle size="1.75rem" color="#15c6b2" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
