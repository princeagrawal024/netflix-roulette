import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetails } from '@/components';
import { extractYear } from '@/utils';
import { BASE_URL } from '@/data/app-data';
import { useMovieContext } from '@/context/MovieContext';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<any | null>(null);
  const { refreshFlag } = useMovieContext();

  useEffect(() => {
    if (movieId == null) {
      return;
    }
    fetchMovieById();
  }, [movieId, refreshFlag]);

  const fetchMovieById = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${movieId}`);
      const movieDataJson = await response.json();
      setMovie(movieDataJson);
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
      setMovie(null);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <MovieDetails
        imageUrl={movie.poster_path}
        name={movie.title}
        releaseYear={extractYear(movie.release_date)}
        runtime={movie.runtime}
        rating={movie.vote_average}
        relevantGenres={movie.genres}
        overview={movie.overview}
        movieId={movie.id}
      />
    </div>
  );
}
