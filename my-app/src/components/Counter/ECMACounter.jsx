import { useState } from "react";

function MyCounter(props) {
  let initialValue = props.initialValue == null ? 1 : props.initialValue;
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    let incrementedValue = value + 1;
    setValue(incrementedValue);
  };

  const decrement = () => {
    let decreamentedValue = value - 1;
    setValue(decreamentedValue);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default MyCounter;
