import '@/styles/genreNavBar.css';

type GenreNavBarProps = {
  genres: string[];
  selectedGenre: string;
  sortBy: string;
  onSelectCallBack: (genre: string) => void;
  setSortByCallback: (sortBy: string) => void;
};

export default function GenreNavBar({
  genres,
  selectedGenre,
  sortBy,
  onSelectCallBack,
  setSortByCallback,
}: GenreNavBarProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg genre-navbar ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {genres.map((genre, index) => (
              <a
                href="#"
                key={index}
                className={`nav-item nav-link ${genre === selectedGenre ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCallBack(genre);
                }}
              >
                {genre}
              </a>
            ))}
          </div>
          <div className="sort-functionality">
            <label htmlFor="sortBy">SORT BY:</label>
            <select
              name="sortBy"
              id="sortBy"
              value={sortBy}
              data-testid="sort-by-dropdown"
              onChange={(e) => setSortByCallback(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="release_date">Release Date</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
