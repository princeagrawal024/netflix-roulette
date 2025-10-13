import 'styles/genreNavBar.css';

type GenreNavBarProps = {
  genres: string[];
  selectedGenre: string;
  onSelectCallBack: (genre: string) => void;
};

export default function GenreNavBar({ genres, selectedGenre, onSelectCallBack }: GenreNavBarProps) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg genre-navbar ">
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
