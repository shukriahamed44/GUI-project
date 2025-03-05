import { useNavigate } from 'react-router-dom';
import React from 'react';

const Mmb = ({ text, to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(to)}
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '14px 28px',
        borderRadius: '9999px', // Fully rounded corners
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 600,
        transition: 'background-color 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#2c2c2c'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#1a1a1a'}
    >
      {text}
    </button>
  );
};

export default Mmb;