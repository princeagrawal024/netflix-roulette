import { useState } from "react";
import "@/styles/searchBar.css";
import { SEARCHBAR_PLACEHOLDER, SEARCH_BTN_TEXT } from '@/data/app-data';

type SearchBarProps = {
  inputSearchQuery: string;
  onSearchCallback: (query: string) => void;
};

export default function SearchBar({
  inputSearchQuery,
  onSearchCallback,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>(inputSearchQuery);

  return (
    <div>
      <nav className="navbar search-navbar">
        <form className="search-form">
          <input
            className="search-input"
            type="search"
            placeholder={SEARCHBAR_PLACEHOLDER}
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>

          <button
            className="search-button"
            type="submit"
            onClick={() => onSearchCallback(searchQuery)}
          >
            {SEARCH_BTN_TEXT}
          </button>
        </form>
      </nav>
    </div>
  );
}
