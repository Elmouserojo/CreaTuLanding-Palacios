import React, { useState } from 'react';
import './ItemCount.css'; // Asegúrate de tener un archivo CSS para estilos adicionales
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <div>
        <button onClick={subtract} disabled={count <= 1}>-</button>
        <span style={{ margin: '0 1rem' }}>{count}</span>
        <button onClick={add} disabled={count >= stock}>+</button>
      </div>
      <button onClick={handleAddToCart} disabled={stock === 0 || count === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
