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
          src={
            props.member.profile_path
              ? `https://image.tmdb.org/t/p/original${props.member.profile_path}`
              : `${
                  props.member.gender === 1
                    ? "/assets/unknown-female.png"
                    : "/assets/unknown-male.png"
                }`
          }
          alt=""
          height="150px"
          width="120px"
        />
      </div>
      <div>
        <h4>{props.member.name}</h4>
      </div>
    </div>
  );
};
export default Card;
