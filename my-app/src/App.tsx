import { useState } from 'react'
import './App.css'
import { GenreNavBar, SearchBar, Counter } from '@/components'

function App() {

  //NavBar
  let genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0]);

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
        <GenreNavBar genres={genres} selectedGenre={selectedGenre} onSelectCallBack={onSelectCallBack} />
      </div>
      <div className='Counter'>
        <Counter  initialValue={100}/>
      </div>
    </>
  )
}

export default App
