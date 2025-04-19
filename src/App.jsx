import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Home con saludo personalizado */}
            <Route 
              path="/" 
              element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} 
            />

            {/* Vista por categoría */}
            <Route 
              path="/category/:categoryId" 
              element={<ItemListContainer />} 
            />

            {/* Detalle del producto */}
            <Route 
              path="/item/:id" 
              element={<ItemDetailContainer />} 
            />

            {/* Página no encontrada */}
            <Route 
              path="*" 
              element={<h1 className="not-found">404 - Página no encontrada</h1>} 
            />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
