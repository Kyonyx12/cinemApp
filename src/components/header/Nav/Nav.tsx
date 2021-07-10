import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiUserCircle, BiSearchAlt, BiMenu } from "react-icons/bi";
import styles from "./Nav.module.css";

export default function Nav() {
  const [burger, setBurger] = useState<boolean>(false);
  const searchRef = useRef<any>(null);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${searchRef.current.value}`);
    searchRef.current.value = null;
  };

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      <nav className={styles.nav}>
        <h1>CinemApp</h1>
        <BiMenu className={styles.burger} size="2rem" onClick={handleBurger} />
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
            <form onSubmit={(e) => handleSearch(e)}>
              <input type="search" className={styles.search} ref={searchRef} />
              <button className={styles.searchIcon}>
                <span>
                  <BiSearchAlt size="1.75rem" color="#15c6b2" />
                </span>
              </button>
            </form>
            <li className={styles.toolBg}>
              <Link href={`/user/${"id"}`} passHref>
                <span>
                  <BiUserCircle size="1.75rem" color="#15c6b2" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {burger && (
        <div className={styles.burgerMenu}>
          <ul className={styles.burgerMenuLayout}>
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
      )}
    </>
  );
}
