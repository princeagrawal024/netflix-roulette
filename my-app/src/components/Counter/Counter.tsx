import { useState } from "react";

type CounterProps = {
  initialValue: number;
};
export default function Counter({ initialValue }: CounterProps) {
  const [currentValue, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue(currentValue + 1);
  };

  const decrement = () => {
    setValue(currentValue - 1);
  };

  return (
    <>
      <div className="counter">
        <h2>{currentValue}</h2>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" onClick={decrement} className="btn btn-primary">
          -
        </button>
        <button type="button" onClick={increment} className="btn btn-primary">
          +
        </button>
      </div>
    </>
  );
}
