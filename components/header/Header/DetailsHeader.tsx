import React from "react";
import Image from "next/image";

import {
  MdInfoOutline,
  MdFavoriteBorder,
  MdStar,
  MdStarHalf,
  MdStarBorder,
} from "react-icons/md";
import styles from "./DetailsHeader.module.css";
import Card from "../../main/Card/Card";

const Header: React.FC<{
  featured: {
    title: string;
    name: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    featuredGenres: string[];
    poster_path: string;
    credits: any;
  };
}> = (props) => {
  const {
    backdrop_path,
    title,
    name,
    overview,
    vote_average,
    featuredGenres,
    poster_path,
    credits,
  } = props.featured;
  const { cast, crew } = credits;

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
        <div className={styles.poster}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="title"
            height="570"
            width="400"
          />
        </div>
        <div>
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
            {featuredGenres
              .map((genre, i) => (
                <h3 key={i}>
                  {genre} <span className={styles.separator}>|</span>
                </h3>
              ))
              .slice(0, 3)}
          </div>
          <div className={styles.actions}>
            <div className={styles.infoBg}>
              <MdInfoOutline size="2rem" />
            </div>
            <div className={styles.favoriteBg}>
              <MdFavoriteBorder size="2rem" />
            </div>
          </div>
          <div className={styles.sipnopsisContainer}>
            <div className={styles.sipnopsisBg}>
              <div className={styles.sipnopsis}>
                <p>{overview.substring(0, 400)}...</p>
              </div>
            </div>
          </div>
          <div className={styles.credits}>
            {crew
              .map((member: any) => <Card member={member} key={member.id} />)
              .slice(0, 3)}
          </div>
          <div className={styles.credits}>
            {cast
              .map((member: any) => <Card member={member} key={member.id} />)
              .slice(0, 5)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
