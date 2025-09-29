import { useState } from 'react'
import './App.css'
import CounterIndex from './components/Counter/CounterIndex'
import GenreNavBar from './components/GenreSelect/GenreNavBar'


function App() {
  let genres = ["ALL", "Crime", "Comedy", "Suspense", "ScienceFiction"];
  let selectedGenre = genres[1];
  let onSelectCallBack=(genre) => console.log("Selected genre:", genre)

  return (
    <>
      <div>
        <GenreNavBar genres={genres} selectedGenre={selectedGenre} onSelectCallBack={onSelectCallBack} />
        <CounterIndex />
      </div>
    </>
  )
}

export default App
