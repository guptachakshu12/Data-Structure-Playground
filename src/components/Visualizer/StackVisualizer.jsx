import React, { useState } from "react";
import Playground from "../Playground";
import "./StackVisualizer.css";

const MAX_SIZE = 5;

function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");
  const [poppingIndex, setPoppingIndex] = useState(null);

  const pushNode = () => {
    if (!value) return alert("Please enter a value to push!");
    if (stack.length >= MAX_SIZE) return alert("Stack Overflow!");

    setStack([...stack, value]);
    setValue("");
  };

  const popNode = () => {
    if (stack.length === 0) return alert("Stack Underflow! Can't pop.");

    setPoppingIndex(0); // top element will be at index 0 visually after reverse()

    setTimeout(() => {
      setStack(stack.slice(0, -1));
      setPoppingIndex(null);
    }, 400);
  };

  return (
    <Playground>
      <div className="visualizer-card">
        <h2>Stack Visualizer</h2>

        <div className="controls">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <button onClick={pushNode}>Push</button>
          <button onClick={popNode}>Pop</button>
        </div>

        <div className="stack-container">
          {[...stack].reverse().map((val, idx) => (
            <div
              key={idx}
              className={`stack-node ${
                idx === poppingIndex ? "popping" : "pushed"
              }`}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </Playground>
  );
}

export default StackVisualizer;
