import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Slider.module.css";

const Slider: React.FC<{
  data: {
    id: string;
    title: string;
    name: string;
    poster_path: string;
    media_type: string;
  }[];
  route: string | string[] | undefined;
}> = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      itemClass={styles.item}
      sliderClass={styles.slider}
    >
      {props.data.map((item) => {
        if (!item.poster_path) return;
        return (
          <Link
            href={`${
              props.route
                ? `details${props.route}/${item.id}`
                : `details/${item.media_type}/${item.id}`
            }`}
            key={item.id}
            passHref
          >
            <div className={styles.img}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="some-alt"
                height="200"
                width="160"
              />
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default Slider;
