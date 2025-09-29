import { createElement, useState } from "react";

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

  return createElement(
    "div",
    null,
    createElement("h2", null, `${value}`),
    createElement("button", { onClick: decrement }, "-"),
    createElement("button", { onClick: increment }, "+")
  );
}

export default MyCounter;