import React, { useState } from "react";
import Playground from "../Playground";
import "./LinkedListVisualizer.css";

function LinkedListVisualizer() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [deletingIndex, setDeletingIndex] = useState(null);

  // Insert at head
  const insertHead = () => {
    if (!value) return alert("Enter a value!");
    setList([value, ...list]);
    setValue("");
  };

  // Insert at tail
  const insertTail = () => {
    if (!value) return alert("Enter a value!");
    setList([...list, value]);
    setValue("");
  };

  // Insert at specific index
  const insertAtIndex = () => {
    if (!value || index === "") return alert("Enter value and index!");
    const idx = parseInt(index);
    if (idx < 0 || idx > list.length) return alert("Invalid index!");
    const newList = [...list];
    newList.splice(idx, 0, value);
    setList(newList);
    setValue("");
    setIndex("");
  };

  // Delete by value
  const deleteByValue = () => {
    if (!value) return alert("Enter a value to delete!");
    const idx = list.indexOf(value);
    if (idx === -1) return alert("Value not found!");
    deleteAtPosition(idx);
  };

  // Delete by index
  const deleteByIndex = () => {
    if (index === "") return alert("Enter index to delete!");
    const idx = parseInt(index);
    if (idx < 0 || idx >= list.length) return alert("Invalid index!");
    deleteAtPosition(idx);
  };

  // Animated delete helper
  const deleteAtPosition = (idx) => {
    setDeletingIndex(0);
    let step = 0;
    const interval = setInterval(() => {
      setDeletingIndex(step);
      step++;
      if (step > idx) {
        clearInterval(interval);
        const newList = [...list];
        newList.splice(idx, 1);
        setList(newList);
        setDeletingIndex(null);
      }
    }, 400);
  };

  return (
    <Playground>
      <div className="visualizer-card">
        <h2>Linked List Visualizer</h2>

        <div className="controls">
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="number"
            placeholder="Index"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            style={{ width: "80px" }}
          />
        </div>

        <div className="controls">
          <button onClick={insertHead}>Insert at Head</button>
          <button onClick={insertTail}>Insert at Tail</button>
          <button onClick={insertAtIndex}>Insert at Index</button>
        </div>

        <div className="controls">
          <button onClick={deleteByValue}>Delete by Value</button>
          <button onClick={deleteByIndex}>Delete by Index</button>
        </div>

        <div className="linkedlist-container">
          {list.map((num, idx) => (
            <div key={idx} className="list-node-wrapper">
              <div
                className={`list-node ${
                  deletingIndex === idx ? "highlight" : ""
                }`}
              >
                {num}
              </div>
              <div className="arrow">→</div>
            </div>
          ))}
          <div className="list-node null-node">NULL</div>
        </div>
      </div>
    </Playground>
  );
}

export default LinkedListVisualizer;
