import React, { useState } from 'react';
import Playground from '../Playground';
import './ArrayVisualizer.css';

function ArrayVisualizer() {
  const [array, setArray] = useState([5, 3, 8, 1, 2]);
  const [insertVal, setInsertVal] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [animatingIndex, setAnimatingIndex] = useState(null);

  const insertAtIndex = () => {
    const val = insertVal.trim();
    const idx = parseInt(insertIndex);

    if (val === '' || isNaN(idx) || idx < 0 || idx > array.length) {
      alert('Please enter a valid value and index');
      return;
    }

    const newArr = [...array];
    newArr.splice(idx, 0, Number(val));

    setAnimatingIndex(idx);
    setTimeout(() => {
      setArray(newArr);
      setAnimatingIndex(null);
    }, 300);

    setInsertVal('');
    setInsertIndex('');
  };

  const deleteAtIndex = () => {
    const idx = parseInt(deleteIndex);

    if (isNaN(idx) || idx < 0 || idx >= array.length) {
      alert('Please enter a valid index to delete');
      return;
    }

    const newArr = [...array];
    newArr.splice(idx, 1);

    setAnimatingIndex(idx);
    setTimeout(() => {
      setArray(newArr);
      setAnimatingIndex(null);
    }, 300);

    setDeleteIndex('');
  };

  const shuffleArray = () => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    setArray(shuffled);
  };

  return (
    <Playground>
      <div className="visualizer-card">
        <h2>Array Visualizer</h2>

        <div className="controls">
          <div className="insert-section">
            <h4>Insert</h4>
            <input
              type="number"
              value={insertVal}
              onChange={(e) => setInsertVal(e.target.value)}
              placeholder="Value"
            />
            <input
              type="number"
              value={insertIndex}
              onChange={(e) => setInsertIndex(e.target.value)}
              placeholder="Index"
            />
            <button onClick={insertAtIndex}>Insert</button>
          </div>

          <div className="delete-section">
            <h4>Delete</h4>
            <input
              type="number"
              value={deleteIndex}
              onChange={(e) => setDeleteIndex(e.target.value)}
              placeholder="Index"
            />
            <button onClick={deleteAtIndex}>Delete</button>
          </div>

          <button onClick={shuffleArray}>Shuffle</button>
        </div>

        <div className="array-container">
          {array.map((num, idx) => (
            <div key={idx} className="array-wrapper">
              <div
                className={`array-node ${idx === animatingIndex ? 'animating' : ''}`}
                style={{ height: `${num * 20}px` }}
              >
                {num}
              </div>
              <div className="array-index">{idx}</div>
            </div>
          ))}
        </div>
      </div>
    </Playground>
  );
}

export default ArrayVisualizer;
