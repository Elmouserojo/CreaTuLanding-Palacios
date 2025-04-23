import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
<BrowserRouter>
<CartProvider>
<NavbarBootstrap/>

<Routes>
  <Route path='/' element={<ItemListContainer greeting='Bienvenidos a TechZone '/>}/>
  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Estas en la categoria:'/>}/>
  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
</Routes>
</CartProvider>

</BrowserRouter>
  )
}

export default App