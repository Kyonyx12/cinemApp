import Slider from "../../src/components/main/Slider/Slider";
import Header from "../../src/components/header/Header/Header";
import { getData, getGenres, hasGenre } from "../../util/tools/helpers";
import Footer from "../../src/components/footer/Footer";
import { key } from "../../util/tools/keys";
import { useRouter } from "next/router";
import { Genres, Media, Special } from "../../util/tools/models";

const Route: React.FC<{
  data: { principal: Special; popular: Media; playing: Media; topRated: Media };
  genres: Genres;
}> = (props) => {
  const router = useRouter();
  const route = router.query.routes;

  const featuredGenres = hasGenre(
    props.genres,
    props.data.principal[2].genre_ids
  );

  return (
    <>
      <Header featured={{ ...props.data.principal[2], featuredGenres }} />
      <div>
        <h3 className="h3">Hot</h3>
        <Slider
          data={props.data.principal}
          route={`${route === "upcoming" ? "/movie" : `/${route}`}`}
        />
      </div>
      <main className="main">
        <div>
          <hr />
          <h3 className="h3">Popular</h3>
          <Slider
            data={props.data.popular}
            route={`${route === "upcoming" ? "/movie" : `/${route}`}`}
          />
        </div>
        <div>
          <hr />
          <h3 className="h3">Now Playing</h3>
          <Slider
            data={props.data.playing}
            route={`${route === "upcoming" ? "/movie" : `/${route}`}`}
          />
        </div>
        <div>
          <hr />
          <h3 className="h3">Top Rated</h3>
          <Slider
            data={props.data.topRated}
            route={`${route === "upcoming" ? "/movie" : `/${route}`}`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Route;

export const getServerSideProps = async (context: {
  query: { routes: string };
}) => {
  let data: { principal: any; popular: any; playing: any; topRated: any } = {
    principal: null,
    popular: null,
    playing: null,
    topRated: null,
  };

  switch (context.query.routes) {
    case "upcoming":
      data.principal = await getData(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
      );
      data.popular = await getData(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
      );
      data.playing = await getData(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
      );
      data.topRated = await getData(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
      );
      break;
    case "tv":
      data.principal = await getData(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
      );
      data.popular = await getData(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}`
      );
      data.playing = await getData(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}`
      );
      data.topRated = await getData(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`
      );
      break;
    case "movie":
      data.principal = await getData(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
      );
      data.popular = await getData(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
      );
      data.playing = await getData(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
      );
      data.topRated = await getData(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
      );
      break;
    default:
      return {
        notFound: true,
      };
  }
  const genres = await getGenres(key);

  return {
    props: {
      data: {
        principal: data.principal.results,
        popular: data.popular.results,
        playing: data.playing.results,
        topRated: data.topRated.results,
      },
      genres: genres,
    },
  };
};
