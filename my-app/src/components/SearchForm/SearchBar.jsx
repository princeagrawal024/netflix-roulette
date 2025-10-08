import React, { useState } from 'react';
import 'styles/searchBar.css';

export default function SearchBar(props) {
    let inputSearchQuery = props.searchQuery;
    let onSearchCallback = props.onSearchCallback;

    const [searchQuery, setSearchQuery] = useState(inputSearchQuery);

    return (
        <div>
            <nav className="navbar search-navbar">
                <form className="search-form">
                    <input
                        className="search-input"
                        type="search"
                        placeholder="What do you want to watch?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        >
                    </input>

                    <button
                        className="search-button"
                        type="submit"
                        onClick={()=>onSearchCallback(searchQuery)}
                        >SEARCH
                    </button>
                </form>
            </nav>
        </div>
    )
}
