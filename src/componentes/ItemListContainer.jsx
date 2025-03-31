import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      fontSize: '1.2rem'
    }}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;