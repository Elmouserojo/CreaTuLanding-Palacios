import { Link } from 'react-router-dom';
import Carrito from './carrito.jsx';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">Mi Tienda</Link>
        
        {/* Navegación principal */}
        <nav className="navbar-links">
          <Link to="/" className="navbar-link">Inicio</Link>

          <div className="navbar-dropdown">
            <span className="navbar-link" role="button" tabIndex={0}>Categorías</span>
            <div className="dropdown-content">
              <Link to="/category/electronics">Electrónica</Link>
              <Link to="/category/jewelery">Joyas</Link>
              <Link to="/category/men's clothing">Ropa Hombre</Link>
              <Link to="/category/women's clothing">Ropa Mujer</Link>
            </div>
          </div>
        </nav>

        {/* Icono de carrito */}
        <Link to="/cart" className="navbar-cart" aria-label="Ver carrito">
          <Carrito />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
