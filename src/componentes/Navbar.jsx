import React from 'react';
import Carrito from './Carrito';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mi E-commerce</div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span style={{ cursor: 'pointer' }}>Electrónica</span>
        <span style={{ cursor: 'pointer' }}>Ropa</span>
        <span style={{ cursor: 'pointer' }}>Hogar</span>
      </div>
      
      <Carrito />
    </nav>
  );
};

export default Navbar;