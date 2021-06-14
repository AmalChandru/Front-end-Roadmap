import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(props.count);
  return (
    <div>
      <h1 className="counter">Counter</h1>
      <p className="content">You have pressed {count} times</p>
      <button onClick={() => setCount(count + 1)} className="btn">
        Press Here
      </button>
    </div>
  );
};

export default Counter;
