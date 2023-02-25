import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  const [count, setCount] = useState(1);
  const [className, setClassName] = useState("normal");
  useEffect(() => {
    if (count % 15 === 0) {
      setClassName("fizzbuzz");
    } else if (count % 5 === 0) {
      setClassName("buzz");
    } else if (count % 3 === 0) {
      setClassName("fizz");
    } else {
      setClassName("normal");
    }
  }, [count]); // dependency array
  // whenever count changes, useEffect should be called

  return (
    <div id="main">
      <button
        id="increment"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <div id="counter" className={className}>
        {count}
      </div>
      <button
        id="decrement"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;

