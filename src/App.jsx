import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PlaygroundPage from './pages/PlaygroundPage';
import ArrayVisualizer from './components/Visualizer/ArrayVisualizer';
import StackVisualizer from './components/Visualizer/StackVisualizer';
import QueueVisualizer from './components/Visualizer/QueueVisualizer';
import LinkedListVisualizer from './components/Visualizer/LinkedListVisualizer';
import TreeVisualizer from './components/Visualizer/TreeVisualizer';
import './index.css';

// Info content for each data structure
const infoContent = {
  Array: "An array is a collection of elements identified by index. Accessing elements is fast, but insertion/deletion in middle is costly.",
  Stack: "A stack is a LIFO (Last In First Out) data structure. Push adds an element, Pop removes the top element.",
  Queue: "A queue is a FIFO (First In First Out) data structure. Enqueue adds at the rear, Dequeue removes from the front.",
  "Linked List": "A linked list is a linear collection of nodes where each node points to the next. Efficient insertion/deletion at any position.",
  Tree: "A tree is a hierarchical data structure with nodes connected by edges. Common types: binary tree, BST, AVL tree."
};

function App() {
  const [selectedDS, setSelectedDS] = useState(null);
  const [showInfo, setShowInfo] = useState(true); // Show info initially

  const renderVisualizer = () => {
    switch (selectedDS) {
      case 'Array': return <ArrayVisualizer />;
      case 'Stack': return <StackVisualizer />;
      case 'Queue': return <QueueVisualizer />;
      case 'Linked List': return <LinkedListVisualizer />;
      case 'Tree': return <TreeVisualizer />;
      case 'Playground': return <PlaygroundPage />;
      default: return <Home />;
    }
  };

  const handleDSClick = (ds) => {
    setSelectedDS(ds);
    setShowInfo(true); // Show info card on click
  };

  return (
    <div className="app">
      <Navbar setSelectedDS={handleDSClick} />
      <div className="main-content">
        <Sidebar setSelectedDS={handleDSClick} />
        <div className="visualizer-container">
          {showInfo && selectedDS && infoContent[selectedDS] ? (
            <div className="visualizer-card">
              <h2>{selectedDS}</h2>
              <p style={{ textAlign: 'center', padding: '1rem' }}>{infoContent[selectedDS]}</p>
              <button onClick={() => setShowInfo(false)}>Start Visualizer</button>
            </div>
          ) : (
            renderVisualizer()
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
