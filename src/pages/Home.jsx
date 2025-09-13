import React from "react";
import "./Home.css";

const Home = ({ setSelectedDS }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <h1 className="home-title">Welcome to Data Structure Playground!</h1>
      <p className="home-description">
        Learn, visualize, and interact with popular data structures. Select a data structure from the sidebar or click one of the buttons below to start visualizing.
      </p>

      {/* Quick Action Buttons */}
      <div className="home-buttons">
        <button onClick={() => setSelectedDS("Array")}>Array</button>
        <button onClick={() => setSelectedDS("Stack")}>Stack</button>
        <button onClick={() => setSelectedDS("Queue")}>Queue</button>
        <button onClick={() => setSelectedDS("Linked List")}>Linked List</button>
        <button onClick={() => setSelectedDS("Tree")}>Tree</button>
      </div>

      {/* About Section */}
      <div className="home-about">
        <h2>What is this playground?</h2>
        <p>
          This playground allows you to visualize how data structures work under the hood. You can perform operations like Add, Remove, and Traverse, and see animations that help you understand their behavior.
        </p>
      </div>

      {/* How to get started */}
      <div className="home-instructions">
        <h2>How to get started:</h2>
        <ol>
          <li>Click a data structure from the sidebar or above buttons.</li>
          <li>Visualize operations like Add, Remove, Shuffle, Traverse, etc.</li>
          <li>Experiment with different structures and see animations in real time.</li>
        </ol>
      </div>

      {/* Tip Box */}
      <div className="home-tip">
        💡 Tip: Start with Arrays—they are simple and easy to visualize!
      </div>
    </div>
  );
};

export default Home;
