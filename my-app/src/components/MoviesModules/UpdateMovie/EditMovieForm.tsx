import 'styles/AddMovieForm.css';
import React, { useEffect, useState } from 'react';
import { Movie, createEmptyMovie } from 'models/MovieDto';
import { BASE_URL } from '@/data/app-data';
import { MovieService } from '@/services';
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io';
import { useMovieContext } from '@/context/MovieContext';

type EditMovieFormProps = {
  movieIdToEdit: string;
  showEditMoviePortalCallback: (shouldShow: boolean) => void;
  showGenericMessagePortalCallback: (heading: string, message: string, show: boolean, isSuccess: boolean) => void;
};

const GENRE_OPTIONS = ['Crime', 'Documentary', 'Horror', 'Comedy', 'Drama', 'Romance'];

const EditMovieForm = ({
  movieIdToEdit,
  showEditMoviePortalCallback,
  showGenericMessagePortalCallback,
}: EditMovieFormProps) => {
  const [form, setForm] = useState<Movie>(createEmptyMovie());
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleRefresh } = useMovieContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value === '' ? 0 : Number(value) }));
  };

  const handleGenreSelect = (genre: string) => {
    setForm((prev) => {
      const isSelected = prev.genres.includes(genre);
      const updatedGenres = isSelected ? prev.genres.filter((g) => g !== genre) : [...prev.genres, genre];
      return { ...prev, genres: updatedGenres };
    });
  };

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movie = await MovieService(movieIdToEdit);
        if (movie) {
          setForm(movie);
        } else {
          console.error('Error loading movie');
        }
      } catch (err) {
        console.error('Error loading movie', err);
      }
    };

    if (movieIdToEdit) {
      loadMovie();
    }
  }, [movieIdToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, id: movieIdToEdit, tagline: `${form.title}` }),
      });
      if (res.ok) {
        showEditMoviePortalCallback(false);
        showGenericMessagePortalCallback('CONGRATULATIONS!', 'The movie has been edited suceessfully!', true, true);
        toggleRefresh();
      } else {
        showGenericMessagePortalCallback('OOPS!', 'Failed to edit the movie!', true, false);
      }
    } catch (err) {
      showGenericMessagePortalCallback('OOPS!', 'Failed to edit movie!', true, false);
    }
  };

  return (
    <>
      <div className="am-title">
        <h2 className="am-heading">Edit Movie</h2>
      </div>

      <form className="am-form" onSubmit={handleSubmit}>
        <div className="am-form-body">
          <button type="button" className="am-close-btn" onClick={() => showEditMoviePortalCallback(false)}>
            X
          </button>

          <div className="am-field">
            <label className="am-label">TITLE:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter movie title"
              required
              className="am-input"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="am-field">
            <label className="am-label">RELEASE DATE:</label>
            <input
              type="date"
              name="release_date"
              required
              className="am-input"
              value={form.release_date}
              onChange={handleChange}
            />
          </div>

          <div className="am-field">
            <label className="am-label">MOVIE URL:</label>
            <input
              type="url"
              name="poster_path"
              required
              className="am-input"
              value={form.poster_path}
              onChange={handleChange}
            />
          </div>

          <div className="am-field">
            <label className="am-label">RATING:</label>
            <input
              type="number"
              name="vote_average"
              step="0.1"
              min="0"
              max="10"
              required
              className="am-input"
              value={form.vote_average}
              onChange={handleNumber}
            />
          </div>

          <div className="am-field">
            <label className="am-label">GENRE:</label>
            <div className="genre-dropdown">
              <div className="genre-dropdown-header" onClick={() => setShowDropdown((s) => !s)}>
                {form.genres.length > 0 ? form.genres.join(', ') : 'Select genres'}
                <span className="arrow">{showDropdown ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}</span>
              </div>

              {showDropdown && (
                <div className="genre-dropdown-list">
                  {GENRE_OPTIONS.map((g) => (
                    <label key={g} className="genre-option">
                      <input type="checkbox" checked={form.genres.includes(g)} onChange={() => handleGenreSelect(g)} />
                      {g}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="am-field">
            <label className="am-label">RUNTIME (minutes):</label>
            <input
              type="number"
              name="runtime"
              min="1"
              required
              className="am-input"
              value={form.runtime}
              onChange={handleNumber}
            />
          </div>

          <div className="am-field">
            <label className="am-label">OVERVIEW:</label>
            <textarea
              name="overview"
              required
              className="am-textarea"
              value={form.overview}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="am-actions">
            <button type="reset" className="am-btn am-reset-btn" onClick={() => setForm(createEmptyMovie())}>
              RESET
            </button>
            <button type="submit" className="am-btn am-submit-btn">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditMovieForm;
