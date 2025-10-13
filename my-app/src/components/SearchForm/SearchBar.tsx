import React, { useState } from "react";
import "styles/searchBar.css";

type SearchBarProps = {
  inputSearchQuery: string;
  onSearchCallback: (query: string) => void;
};

export default function SearchBar({inputSearchQuery, onSearchCallback}: SearchBarProps) {

    const [searchQuery, setSearchQuery] = useState<string>(inputSearchQuery);

  return (
    <div>
      <nav className="navbar search-navbar">
        <form className="search-form">
          <input
            className="search-input"
            type="search"
            placeholder="What do you want to watch?"
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>

          <button
            className="search-button"
            type="submit"
            onClick={() => onSearchCallback(searchQuery)}
          >
            SEARCH
          </button>
        </form>
      </nav>
    </div>
  );
}
