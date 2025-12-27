import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieTile } from '@/components';
import { BuildMoviesUrl } from '@/utils';
import 'styles/Movie.css';
import { BASE_URL, DEFAULT_PAGE_SIZE } from '@/data/app-data';
import { useMovieContext } from '@/context/MovieContext';

type MovieProps = {
  sortBy: string;
  genre: string;
  movieSearchString: string;
  onEditCallback?: (movieId: string) => void;
  onDeleteCalback?: (movieId: string) => void;
};

const Movie = ({ sortBy, genre, movieSearchString, onEditCallback, onDeleteCalback }: MovieProps) => {
  const { refreshFlag } = useMovieContext();
  const [movies, setMoviesData] = useState<any[]>([]);
  const [currentPageNo, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const mergeMovies = (prev: any[], newItems: any[]) => {
    const existingIds = new Set(prev.map((movie) => movie.id));
    const filtered = newItems.filter((movie: any) => !existingIds.has(movie.id));
    return [...prev, ...filtered];
  };

  const fetchNext = () => {
    const nextPage = currentPageNo + 1;
    setPage(nextPage);
    loadPage(nextPage);
  };

  const loadPage = async (requestedPage: number) => {
    const offset = requestedPage * DEFAULT_PAGE_SIZE;
    try {
      const fetchUrl = BuildMoviesUrl({
        baseUrl: BASE_URL,
        sortBy: sortBy,
        sortOrder: 'asc',
        searchBy: 'title',
        filter: genre,
        movieSearchString: movieSearchString,
        offset: offset,
        limit: DEFAULT_PAGE_SIZE,
      });
      const response = await fetch(fetchUrl);
      const parsedData = await response.json();
      const newItems = parsedData.data ?? [];
      setMoviesData((prev) => mergeMovies(prev, newItems));

      const total = parsedData.totalAmount ?? null;
      if (total !== null) {
        let totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE);
        let hasMorePages = requestedPage + 1 < totalPages;
        setHasMore(hasMorePages);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      const localDummyResponse = await fetch('/MoviesData.json');
      const localData = await localDummyResponse.json();
      setMoviesData(localData.data);
    }
  };

  useEffect(() => {
    setMoviesData([]);
    setPage(0);
    setHasMore(true);
    loadPage(0);
  }, [sortBy, genre, movieSearchString, refreshFlag]);

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNext}
        hasMore={hasMore}
        scrollThreshold={0.9}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more movies</p>}
        className="movieGrid"
      >
        {movies.map((movie) => {
          return (
            <div className="movieElement" key={movie.id}>
              <MovieTile
                imageUrl={movie.poster_path}
                movieName={movie.title}
                releaseYear={movie.release_date}
                relevantGenres={movie.genres}
                movieId={movie.id}
                onEditCallback={onEditCallback}
                onDeleteCalback={onDeleteCalback}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default Movie;
