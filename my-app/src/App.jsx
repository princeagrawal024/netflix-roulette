import { useState } from 'react'
import './App.css'
import CounterIndex from './components/Counter/CounterIndex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CounterIndex/>
      </div>
    </>
  )
}

export default App
