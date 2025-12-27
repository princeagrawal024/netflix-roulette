import 'styles/MovieDetails.css';
import { useNavigate } from 'react-router-dom';
import { MinuteToHourUtils } from '@/utils';
import { FaSearch } from 'react-icons/fa';
type MovieDetailsProps = {
  imageUrl: string;
  name: string;
  releaseYear: string;
  runtime: number;
  rating: number;
  relevantGenres: string[];
  movieId: string;
  overview: string;
};

const MovieDetails = ({
  imageUrl,
  name,
  releaseYear,
  runtime,
  rating,
  relevantGenres,
  overview,
}: MovieDetailsProps) => {
  const navigate = useNavigate();
  return (
    <div className="md-div">
      <div className="md-poster">
        <img
          src={imageUrl}
          className="md-image"
          alt={`${name} poster`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/no-poster.png';
          }}
        />
      </div>
      <div className="md-data">
        <div className="md-header">
          <span className="md-title">{name}</span>
          <span className="md-rating">{rating}</span>
        </div>

        <p className="md-genres">{relevantGenres.join(', ')}</p>

        <div className="md-meta">
          <span className="md-release-year">{releaseYear}</span>
          <span className="md-runtime">{MinuteToHourUtils(runtime)}</span>
        </div>

        <div className="md-overview">{overview}</div>
      </div>

      <button type="button" aria-label="Back to search" onClick={() => navigate('/')}>
        <FaSearch />
      </button>
    </div>
  );
};

export default MovieDetails;
