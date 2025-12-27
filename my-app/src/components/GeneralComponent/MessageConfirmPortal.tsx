import 'styles/messageConfirmPortal.css';
import { IoMdWarning } from 'react-icons/io';
import { BASE_URL } from '@/data/app-data';
import { useMovieContext } from '@/context/MovieContext';

type MessageConfirmPortalProps = {
  heading: string;
  message: string;
  movieId: string;
  showGenericMessagePortalCallback: (heading: string, message: string, show: boolean, isSuccess: boolean) => void;
  setShowDeleteMovieWarningCallback: (value: boolean) => void;
};
const MessageConfirmPortal = ({
  heading,
  message,
  movieId,
  showGenericMessagePortalCallback,
  setShowDeleteMovieWarningCallback,
}: MessageConfirmPortalProps) => {
  const { toggleRefresh } = useMovieContext();
  const deleteMovie = async (movieId: string) => {
    try {
      const res = await fetch(`${BASE_URL}/${movieId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        showGenericMessagePortalCallback('Success', 'Movie deleted successfully', true, true);
        setShowDeleteMovieWarningCallback(false);
        toggleRefresh();
      } else {
        showGenericMessagePortalCallback('OOPS!', 'Failed to delete the movie!', true, false);
      }
    } catch (err) {
      showGenericMessagePortalCallback('OOPS!', 'Failed to delete the movie!', true, false);
    }
  };

  return (
    <>
      <div className="warning-portal-title">
        <div className="warning-logo">
          <IoMdWarning />
        </div>
        <button
          type="button"
          className="warning-portal-close-button"
          onClick={() => setShowDeleteMovieWarningCallback(false)}
        >
          X
        </button>
        <h1 className="warning-portal-heading">{heading}</h1>
        <p>{message}</p>
        <button type="button" className="warning-confirmation-btn" onClick={() => deleteMovie(movieId)}>
          CONFIRM
        </button>
      </div>
    </>
  );
};

export default MessageConfirmPortal;
