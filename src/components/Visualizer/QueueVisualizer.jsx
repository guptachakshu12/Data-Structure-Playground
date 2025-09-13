import React, { useState } from "react";
import Playground from "../Playground";
import "./QueueVisualizer.css";

function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");
  const [dequeueing, setDequeueing] = useState(false);

  const enqueue = () => {
    if (!value) return alert("Please enter a value!");
    setQueue((prev) => [...prev, value]);
    setValue("");
  };

  const dequeue = () => {
    if (queue.length === 0) {
      alert("Queue is empty! Can't dequeue.");
      return;
    }
    setDequeueing(true);
    setTimeout(() => {
      setQueue((prev) => prev.slice(1));
      setDequeueing(false);
    }, 400); // wait for animation
  };

  return (
    <Playground>
      <div className="visualizer-card">
        <h2>Queue Visualizer</h2>

        <div className="controls">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <button onClick={enqueue}>Enqueue</button>
          <button onClick={dequeue}>Dequeue</button>
        </div>

        <div className="queue-wrapper">
          {queue.map((val, idx) => (
            <div
              key={idx}
              className={`queue-node ${dequeueing && idx === 0 ? "dequeue" : ""}`}
              style={{
                animationDelay: idx === queue.length - 1 ? "0.1s" : "0s",
              }}
            >
              <div className="node-value">{val}</div>
              {idx === 0 && <div className="pointer-label front">Front</div>}
              {idx === queue.length - 1 && (
                <div className="pointer-label rear">Rear</div>
              )}
              {idx < queue.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </Playground>
  );
}

export default QueueVisualizer;
