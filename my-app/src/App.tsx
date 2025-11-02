import { useState } from 'react'
import './App.css'
import { GenreNavBar, SearchBar, Counter } from '@/components'
import { GENRES, COUNTER_INITIAL_VALUE } from '@/data/app-data';

function App() {

  //NavBar
  const [selectedGenre, setSelectedGenre] = useState<string>(GENRES[0]);

  let onSelectCallBack = (genre:string) => {
    console.log("Selected genre:", genre);
    setSelectedGenre(genre);
  }

  //SearchBar
  let searchQuery:string = "";
  let onSearchCallback = (query:string)=>{console.log("search movie button clicked:", query)};


  return (
    <>
      <div className='MoviesSearchBar'>
        <SearchBar inputSearchQuery={searchQuery} onSearchCallback={onSearchCallback}/>
      </div>
      <div className='NaveBar'>
        <GenreNavBar genres={GENRES} selectedGenre={selectedGenre} onSelectCallBack={onSelectCallBack} />
      </div>
      <div className='Counter'>
        <Counter  initialValue={COUNTER_INITIAL_VALUE}/>
      </div>
    </>
  )
}

export default App
