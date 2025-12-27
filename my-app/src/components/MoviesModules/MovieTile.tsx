import 'styles/MovieItem.css';
import { extractYear } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';

type MovieTileProps = {
  imageUrl: string;
  movieName: string;
  releaseYear: string;
  relevantGenres: string[];
  movieId: string;
  onEditCallback: (movieId: string) => void;
  onDeleteCalback: (movieId: string) => void;
};

const MovieTile = ({
  imageUrl,
  movieName,
  releaseYear,
  relevantGenres,
  movieId,
  onEditCallback,
  onDeleteCalback,
}: MovieTileProps) => {
  const navigate = useNavigate();

  return (
    <div className="movie-item" onClick={() => navigate(`/movies/${movieId}`)}>
      <div className="movie-poster-container">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={`${movieName} poster`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/no-poster.png';
          }}
        />
        <div className="movie-actions">
          <button
            type="button"
            className="movie-action-btn edit-btn"
            aria-label="Edit movie"
            onClick={(e) => {
              e.stopPropagation();
              onEditCallback(movieId);
            }}
          >
            <GrEdit />
          </button>
          <button
            type="button"
            className="movie-action-btn delete-btn"
            aria-label="Delete movie"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteCalback(movieId);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      <div className="movie-details">
        <h5 className="movie-title">{movieName}</h5>
        <h5 className="movie-year">{extractYear(releaseYear)}</h5>
        <p className="movie-genres">{relevantGenres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieTile;
