import { createElement, useState } from "react";

function MyCounter(props) {
  const [value, setValue] = useState(props.initialValue);

  const increment = () => {
    let incrementedValue = value + 1;
    setValue(incrementedValue);
  };

  const decrement = () => {
    let decreamentedValue = value - 1;
    setValue(decreamentedValue);
  };

  return createElement(
    "div",
    null,
    createElement("h2", null, `Value: ${value}`),
    createElement("button", { onClick: decrement }, "-"),
    createElement("button", { onClick: increment }, "+")
  );
}

export default MyCounter;