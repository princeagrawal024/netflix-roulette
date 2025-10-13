import { useState } from 'react'
import './App.css'
import GenreNavBar from 'components/GenreSelect/GenreNavBar'
import SearchBar from 'components/SearchForm/SearchBar';
import Counter from 'components/Counter/Counter';


function App() {

  //NavBar
  let genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0]);

  let onSelectCallBack = (genre:string) => {
    console.log("Selected genre:", genre);
    setSelectedGenre(genre);
  }

  //SearchBar
  let searchQuery:string = "suspense thriller";
  let onSearchCallback = (query:string)=>{console.log("search movie button clicked:", query)};


  return (
    <>
      <div className='MoviesSearchBar'>
        <SearchBar inputSearchQuery={searchQuery} onSearchCallback={onSearchCallback}/>
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
