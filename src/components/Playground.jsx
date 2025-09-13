import React from 'react';
import './Playground.css'; // optional for cleaner styling

function Playground({ children }) {
  return (
    <div className="playground-container">
      {children}
    </div>
  );
}

export default Playground;
