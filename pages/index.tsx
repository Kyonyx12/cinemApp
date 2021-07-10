import React from "react";

import { getData, getGenres, hasGenre } from "../util/tools/helpers";
import Header from "../src/components/header/Header/Header";
import Slider from "../src/components/main/Slider/Slider";
import { key } from "../util/tools/keys";
import { Genres, Media, Special } from "../util/tools/models";

const Home: React.FC<{
  data: {
    popularM: Media;
    popularTv: Media;
    trending: Special;
    topRatedM: Media;
    topRatedTv: Media;
  };
  genres: Genres;
}> = (props) => {
  const featuredGenres = hasGenre(
    props.genres,
    props.data.trending[0].genre_ids
  );

  return (
    <>
      <Header featured={{ ...props.data.trending[0], featuredGenres }} />
      <div className="header-slider">
        <h3 className="h3">Trending</h3>
        <Slider data={props.data.trending} route={undefined} />
      </div>
      <main className="main">
        <div>
          <hr />
          <h3 className="h3">Popular Movies</h3>
          <Slider data={props.data.popularM} route="/movie" />
        </div>
        <div>
          <hr />
          <h3 className="h3">Top Rated Movies</h3>
          <Slider data={props.data.topRatedM} route="/movie" />
        </div>
        <div>
          <hr />
          <h3 className="h3">Popular Tv Shows</h3>
          <Slider data={props.data.popularTv} route="/tv" />
        </div>
        <div>
          <hr />
          <h3 className="h3">Top Rated Tv Shows</h3>
          <Slider data={props.data.topRatedTv} route="/tv" />
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const trending = await getData(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
  );
  const popularM = await getData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
  );
  const topRatedM = await getData(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
  );
  const popularTv = await getData(
    `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
  );
  const topRatedTv = await getData(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`
  );

  const genres = await getGenres(key);

  return {
    props: {
      data: {
        trending: trending.results,
        popularM: popularM.results,
        topRatedM: topRatedM.results,
        popularTv: popularTv.results,
        topRatedTv: topRatedTv.results,
      },
      genres: genres,
    },
  };
};
