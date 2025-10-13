import React, { useState } from 'react'

export default function Counter({ initialValue = 1 }) {
  const [currentValue, setValue] = useState(initialValue);

  const increment = () => {
    setValue(currentValue+1);
  };

  const decrement = () => {
    setValue(currentValue-1);
  };

  return (
    <>
      <div className='counter'>
        <h2>{currentValue}</h2>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" onClick={decrement} className="btn btn-primary">-</button>
        <button type="button" onClick={increment} className="btn btn-primary">+</button>
      </div>
    </>
  )
}
