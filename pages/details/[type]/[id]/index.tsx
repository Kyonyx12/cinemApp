import React from "react";
import { key } from "../../../../tools/keys";
import Image from "next/image";
import { getData, getGenres } from "../../../../tools/helpers";
import DetailsHeader from "../../../../components/header/Header/DetailsHeader";
import Footer from "../../../../components/footer/Footer";

const Details: React.FC<{ data: any }> = (props) => {
  const featuredGenres = props.data.genres.map(
    (genre: { id: number; name: string }) => genre.name
  );

  return (
    <div>
      <DetailsHeader featured={{ ...props.data, featuredGenres }} />
      <main className="main"></main>
      <Footer />
    </div>
  );
};

export default Details;

export const getServerSideProps = async (context: {
  query: { id: string; type: string };
}) => {
  const type = context.query.type;
  const id = context.query.id;

  const data = await getData(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${key}`
  );
  const credits = await getData(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${key}`
  );

  return { props: { data: { ...data, credits } } };
};
