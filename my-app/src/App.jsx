import { useState } from 'react'
import './App.css'
import GenreNavBar from 'components/GenreSelect/GenreNavBar'
import SearchBar from 'components/SearchForm/SearchBar';
import Counter from './components/Counter/JSXCounter';


function App() {

  //NavBar
  let genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  let onSelectCallBack = (genre) => {
    console.log("Selected genre:", genre);
    setSelectedGenre(genre);
  }

  //SearchBar
  let searchQuery = "suspense thriller";
  let onSearchCallback = (query)=>{console.log("search movie button clicked:", query)};


  return (
    <>
      <div className='MoviesSearchBar'>
        <SearchBar searchQuery={searchQuery} onSearchCallback={onSearchCallback}/>
      </div>
      <div className='NaveBar'>
        <GenreNavBar genres={genres} selectedGenre={selectedGenre} onSelectCallBack={onSelectCallBack} />
      </div>
      <div className='Counter'>
        <Counter  initialValue={100}/>
      </div>
    </>
  )
}

export default App
