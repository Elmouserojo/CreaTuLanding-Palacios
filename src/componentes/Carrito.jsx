import React from 'react';

const Carrito = () => {
  // Valor hardcodeado como se solicita
  const cartItems = 5;
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <span role="img" aria-label="Carrito de compras" style={{ fontSize: '1.5rem' }}>🛒</span>
      <span style={{
        backgroundColor: 'red',
        borderRadius: '50%',
        padding: '0.2rem 0.5rem',
        fontSize: '0.8rem'
      }}>{cartItems}</span>
    </div>
  );
};

export default Carrito;