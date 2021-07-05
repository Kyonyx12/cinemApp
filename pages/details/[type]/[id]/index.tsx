import React from "react";

import DetailsHeader from "../../../../src/components/header/Header/DetailsHeader";
import Footer from "../../../../src/components/footer/Footer";
import { getData } from "../../../../util/tools/helpers";
import { key } from "../../../../util/tools/keys";

const Details: React.FC<{ data: any }> = (props) => {
  const featuredGenres = props.data.genres.map(
    (genre: { id: number; name: string }) => genre.name
  );

  return (
    <>
      <DetailsHeader featured={{ ...props.data, featuredGenres }} />
      <Footer />
    </>
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
  console.log(data);
  return { props: { data: { ...data, credits } } };
};
