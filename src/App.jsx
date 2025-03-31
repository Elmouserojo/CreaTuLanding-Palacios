import React from 'react';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda online!" />
    </div>
  );
}

export default App;