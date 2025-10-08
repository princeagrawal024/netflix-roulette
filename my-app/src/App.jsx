import { useState } from 'react'
import './App.css'
import CounterIndex from 'components/Counter/CounterIndex'
import GenreNavBar from 'components/GenreSelect/GenreNavBar'
import SearchBar from 'components/SearchForm/SearchBar';


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
        <CounterIndex />
      </div>
    </>
  )
}

export default App
