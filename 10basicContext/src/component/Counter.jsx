// Counter.js
import React, { useContext } from "react";
import { CountContext } from '../context/CountContext'; // Adjust path as necessary

const Counter = () => {
  const counterContext = useContext(CountContext);

  return (
    <>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>
      {"  "}
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Decrement
      </button>
      <br />
    </>
  );
};

export default Counter;
