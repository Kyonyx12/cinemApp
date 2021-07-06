import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "../../../util/tools/helpers";
import Footer from "../../../src/components/footer/Footer";
import { key } from "../../../util/tools/keys";

const Results: React.FC<{ data: any }> = (props) => {
  if (props.data.results.length === 0) {
    return (
      <>
        <main className="main">
          <div className="not-found">
            <h2>Not results found.</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <main className="main">
        <div className="results">
          {props.data.results.map((item: any) => {
            if (!item.poster_path) return;
            return (
              <Link
                href={`/details/${item.media_type}/${item.id}`}
                key={item.id}
                passHref
              >
                <div className="result">
                  <Image
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                        : `https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png`
                    }
                    height="280px"
                    width="240px"
                    alt={item.name ? item.name : item.title}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async (context: { query: any }) => {
  const data = await getData(
    `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${context.query.query}&page=1&include_adult=false`
  );

  return {
    props: {
      data: data,
    },
  };
};
export default Results;
