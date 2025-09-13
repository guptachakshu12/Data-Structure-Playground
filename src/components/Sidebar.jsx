import React from 'react';
import { FaCubes, FaLayerGroup, FaRandom, FaProjectDiagram, FaTree } from 'react-icons/fa';
import './Sidebar.css'; // optional, for styling

const Sidebar = ({ setSelectedDS }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Data Structures</h2>
      <button className="sidebar-btn" onClick={() => setSelectedDS('Array')}>
        <FaCubes className="icon" /> Array
      </button>
      <button className="sidebar-btn" onClick={() => setSelectedDS('Stack')}>
        <FaLayerGroup className="icon" /> Stack
      </button>
      <button className="sidebar-btn" onClick={() => setSelectedDS('Queue')}>
        <FaRandom className="icon" /> Queue
      </button>
      <button className="sidebar-btn" onClick={() => setSelectedDS('Linked List')}>
        <FaProjectDiagram className="icon" /> Linked List
      </button>
      <button className="sidebar-btn" onClick={() => setSelectedDS('Tree')}>
        <FaTree className="icon" /> Tree
      </button>
    </aside>
  );
};

export default Sidebar;
