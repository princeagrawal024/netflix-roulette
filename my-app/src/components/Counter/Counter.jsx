import React, { useState } from 'react'

export default function Counter(props) {
  let initialValue = props.initialValue == null ? 1 : props.initialValue;
  const [currentValue, setValue] = useState(initialValue);

  const increment = () => {
    let incrementedValue = currentValue + 1;
    setValue(incrementedValue);
  };

  const decrement = () => {
    let decreamentedValue = currentValue - 1;
    setValue(decreamentedValue);
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
