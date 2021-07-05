import React from "react";
import Image from "next/image";

import {
  MdInfoOutline,
  MdFavoriteBorder,
  MdStar,
  MdStarHalf,
  MdStarBorder,
} from "react-icons/md";
import styles from "./Header.module.css";
import { Featured } from "../../../../util/tools/models";

const Header: React.FC<{
  featured: Featured;
}> = (props) => {
  const { backdrop_path, title, name, overview, vote_average, featuredGenres } =
    props.featured;

  const totalStars = vote_average / 2;
  const emptyStars = 5 - totalStars;

  let stars: string[] = [];

  const generateStars = () => {
    for (let i = 0; i < totalStars - 1; i++) {
      const star = "full";
      stars.push(star);
    }
    for (let i = 0; i <= emptyStars; i++) {
      const star = "empty";
      stars.push(star);
    }
  };

  generateStars();

  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="title"
          height="1440"
          width="2560"
        />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title ? title : name}</h2>
        {totalStars !== 0 ? (
          <div>
            {stars.map((star, i) => {
              return (
                <span key={i}>
                  {star === "full" ? (
                    <MdStar color="gold" size="1.5rem" />
                  ) : (
                    <MdStarBorder size="1.5rem" />
                  )}
                </span>
              );
            })}
          </div>
        ) : (
          <p style={{ fontSize: "large", fontWeight: 600 }}>
            Not enough ratings yet
          </p>
        )}
        <div className={styles.categories}>
          {featuredGenres.map((genre, i) => (
            <h3 key={i}>
              {genre} <span className={styles.separator}>|</span>
            </h3>
          ))}
        </div>
        <div className={styles.actions}>
          <div className={styles.infoBg}>
            <MdInfoOutline size="1.75rem" />
          </div>
          <div className={styles.favoriteBg}>
            <MdFavoriteBorder size="1.75rem" />
          </div>
        </div>
        <div className={styles.sipnopsisBg}>
          <div className={styles.sipnopsis}>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
