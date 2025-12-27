import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/searchBar.css';
import { SEARCHBAR_PLACEHOLDER, SEARCH_BTN_TEXT } from '@/data/app-data';

type SearchBarProps = {
  inputSearchQuery: string;
  onSearchCallback: (query: string) => void;
  setDisplayAddMovieFormCallBack: (value: boolean) => void;
};

export default function SearchBar({
  inputSearchQuery,
  onSearchCallback,
  setDisplayAddMovieFormCallBack,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>(inputSearchQuery || '');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchCallback(searchQuery.trim());
    }
  };

  return (
    <div>
      <nav className="search-navbar">
        <div className="netflix-roulette-logo">
          <Link to="/" className="logo-link">
            <span className="netflix">netflix</span>
            <span className="roulette">roulette</span>
          </Link>
        </div>
        <div className="add-movie-btn-div">
          <button type="button" className="add-movie-btn" onClick={() => setDisplayAddMovieFormCallBack(true)}>
            + ADD MOVIE
          </button>
        </div>
        <h2 className="find-movie">FIND YOUR MOVIE</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="search"
            placeholder={SEARCHBAR_PLACEHOLDER}
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="movie-search-box"
          ></input>
          <button className="search-button" type="submit" data-testid="movie-search-btn" disabled={!searchQuery.trim()}>
            {SEARCH_BTN_TEXT}
          </button>
        </form>
      </nav>
    </div>
  );
}
