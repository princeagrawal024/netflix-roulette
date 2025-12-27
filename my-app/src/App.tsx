import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { ScrollToTop } from '@/utils';
import { GenreNavBar, SearchBar, Movie, MovieDetailsPage, AddMovieForm, EditMovieForm } from '@/components';
import { GENRES } from '@/data/app-data';
import { ModalPortal } from '@/components';
import { GenericMessagePortal, MessageConfirmPortal } from '@/components/GeneralComponent';
import { MovieProvider } from '@/context';
import { useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </MovieProvider>
  );
}

function AppContent() {
  type GenericMessageState = {
    show: boolean;
    heading: string;
    message: string;
    isSuccess: boolean;
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [shouldShowMovieFormModal, setShowMovieForm] = useState<boolean>(false);
  const [shouldShowEditMovieModal, setShowEditMovieForm] = useState<boolean>(false);
  const [shouldShowDeleteMovieModal, setShowDeleteMovieWarning] = useState<boolean>(false);
  const [movieIdToEdit, setMovieIdToEdit] = useState<string>('');
  const [movieIdToDelete, setMovieIdToDelete] = useState<string>('');
  const selectedGenre = searchParams.get('genre') || GENRES[0];
  const sortBy = searchParams.get('sortBy') || 'title';
  const query = searchParams.get('query') || '';
  const navigate = useNavigate();
  const [genericMessage, setGenericMessage] = useState<GenericMessageState>({
    show: false,
    heading: 'heading',
    message: 'message',
    isSuccess: false,
  });

  const setGenericMessageCallback = (heading: string, message: string, show: boolean, isSuccess: boolean): void => {
    setGenericMessage({
      show: show,
      heading: heading,
      message: message,
      isSuccess: isSuccess,
    });
  };

  const onEditCallback = (movieId: string): void => {
    setShowEditMovieForm(true);
    setMovieIdToEdit(movieId);
  };

  const showEditMoviePortalCallback = (value: boolean): void => {
    setShowEditMovieForm(value);
  };

  const onDeleteCalback = (movieId: string): void => {
    setMovieIdToDelete(movieId);
    setShowDeleteMovieWarning(true);
    const qs = searchParams.toString();
    navigate(qs ? `/?${qs}` : '/');
  };

  const setDisplayAddMovieFormCallBack = (value: boolean): void => {
    setShowMovieForm(value);
  };

  const onSearchCallback = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('query', query);
    setSearchParams(params);
  };

  const onSelectCallBack = (genre: string) => {
    const params = new URLSearchParams(searchParams);
    if (genre) {
      params.set('genre', genre);
    } else {
      params.delete('genre');
    }
    setSearchParams(params);
  };

  const setSortByCallback = (sortByValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', sortByValue);
    setSearchParams(params);
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <SearchBar
              inputSearchQuery={query}
              onSearchCallback={onSearchCallback}
              setDisplayAddMovieFormCallBack={setDisplayAddMovieFormCallBack}
            />
          }
        />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
      <div className="NavBar">
        <GenreNavBar
          genres={GENRES}
          selectedGenre={selectedGenre}
          sortBy={sortBy}
          onSelectCallBack={onSelectCallBack}
          setSortByCallback={setSortByCallback}
        />
      </div>
      <div>
        {shouldShowDeleteMovieModal && (
          <ModalPortal>
            <div className="am-overlay">
              <MessageConfirmPortal
                heading={'DELETE MOVIE'}
                message={'Are you sure you want to delete this movie?'}
                movieId={movieIdToDelete}
                showGenericMessagePortalCallback={setGenericMessageCallback}
                setShowDeleteMovieWarningCallback={setShowDeleteMovieWarning}
              ></MessageConfirmPortal>
            </div>
          </ModalPortal>
        )}
      </div>
      <div>
        {genericMessage.show && (
          <ModalPortal>
            <div className="am-overlay">
              <div className="am-modal">
                <GenericMessagePortal
                  heading={genericMessage.heading}
                  message={genericMessage.message}
                  isSuccess={genericMessage.isSuccess}
                  showGenericMessagePortalCallback={setGenericMessageCallback}
                ></GenericMessagePortal>
              </div>
            </div>
          </ModalPortal>
        )}
      </div>
      <div>
        {shouldShowMovieFormModal && (
          <ModalPortal>
            <div className="am-overlay">
              <div className="am-modal">
                <AddMovieForm
                  setDisplayAddMovieFormCallBack={setDisplayAddMovieFormCallBack}
                  showGenericMessagePortalCallback={setGenericMessageCallback}
                />
              </div>
            </div>
          </ModalPortal>
        )}
      </div>
      <div>
        {shouldShowEditMovieModal && (
          <ModalPortal>
            <div className="am-overlay">
              <div className="am-modal">
                <EditMovieForm
                  movieIdToEdit={movieIdToEdit}
                  showEditMoviePortalCallback={showEditMoviePortalCallback}
                  showGenericMessagePortalCallback={setGenericMessageCallback}
                />
              </div>
            </div>
          </ModalPortal>
        )}
      </div>
      <div className="Movies">
        <Movie
          sortBy={sortBy}
          genre={selectedGenre}
          movieSearchString={query}
          onEditCallback={onEditCallback}
          onDeleteCalback={onDeleteCalback}
        />
      </div>
    </>
  );
}
