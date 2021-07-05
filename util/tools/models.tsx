export type Special = {
  id: string;
  title: string;
  name: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  backdrop_path: string;
  overview: string;
  vote_average: number;
}[];
export type Media = {
  id: string;
  title: string;
  name: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
}[];
export type Featured = {
  title: string;
  name: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  featuredGenres: string[];
};
export type FeaturedSpecial = {
  title: string;
  name: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  featuredGenres: string[];
  poster_path: string;
  credits: any;
};
export type Genres = { id: number; name: string }[];
