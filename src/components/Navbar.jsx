import React from 'react';

const Navbar = ({ setSelectedDS }) => {
  return (
    <nav style={{
      background: 'linear-gradient(90deg, #4f46e5, #10b981)',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>Data Structure Playground</h1>
      <div>
        {/* Home button resets selectedDS */}
        <button onClick={() => setSelectedDS(null)}>Home</button>
        {/* Playground button sets selectedDS to Playground */}
        <button onClick={() => setSelectedDS('Playground')}>Playground</button>
      </div>
    </nav>
  );
};

export default Navbar;
