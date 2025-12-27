export type Movie = {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
  genres: string[];
  tagline: string;
};

export const createEmptyMovie = (): Movie => ({
  title: '',
  vote_average: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  runtime: 0,
  genres: [],
  tagline: 'tagline',
});
