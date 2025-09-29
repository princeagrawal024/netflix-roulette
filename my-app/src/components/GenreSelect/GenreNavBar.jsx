import React from 'react'
import '../../styles/genreNavBar.css';

export default function GenreNavBar(props) {
    let genres = props.genres;
    let selectedGenre = props.selectedGenre;
    let onSelectCallBack = props.onSelectCallBack;
    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                        genres.map((genre, index) => (
                            <a 
                                key={index}
                                className={`nav-item nav-link ${genre === selectedGenre ? 'active' : ''}`}
                                href="#"
                                onClick={() => onSelectCallBack(genre)}
                            >
                                {genre}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
