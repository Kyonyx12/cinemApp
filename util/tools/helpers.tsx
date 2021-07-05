export const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const getGenres = async (key: string | undefined) => {
  const getMovieGenres = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  );
  const getTvGenres = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}`
  );

  const movieGenres = await getMovieGenres.json();
  const tvGenres = await getTvGenres.json();

  const genres = [...movieGenres.genres, ...tvGenres.genres];
  return genres;
};

export const hasGenre = (
  genres: { id: number; name: string }[],
  genre_ids: number[]
) => {
  const find = genres.filter((genre) => genre_ids.includes(genre.id));
  let genresFind = Array.from(new Set(find.map((item) => item.name)));

  if (genresFind.length > 3) {
    return genresFind.slice(0, 3);
  } else {
    return genresFind;
  }
};
