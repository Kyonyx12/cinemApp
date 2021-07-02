import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

const Card: React.FC<{ member: any }> = (props) => {
  if (props.member.job) {
    return (
      <div className={styles.crew}>
        <h4>{props.member.name}</h4>
        <p>{props.member.job}</p>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${props.member.profile_path}`}
          alt=""
          height="150px"
          width="120px"
        />
      </div>
      <div className={styles.name}>
        <h4>{props.member.name}</h4>
      </div>
    </div>
  );
};
export default Card;
