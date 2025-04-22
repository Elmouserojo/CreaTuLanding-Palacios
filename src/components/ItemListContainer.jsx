import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'; 
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulación de fetch con promesa
  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              title: 'SSD 1TB',
              price: 1000,
              pictureUrl: '/ssd.jpg',
              description: 'Descripción del producto 1',
              stock: 5
            },
            {
              id: 2,
              title: 'Cadena de Oro',
              price: 1500,
              pictureUrl: '/cadenaDeOro.jpg',
              description: 'Descripción del producto 2',
              stock: 3
            },
            {
              id: 3,
              title: 'Pantalón de algodón',
              price: 2000,
              pictureUrl: '/pantalon.jpg',
              description: 'Descripción del producto 3',
              stock: 0
            },
            {
              id: 4,
              title: 'Remera de algodón (Mujer)',
              price: 2000,
              pictureUrl: '/remera.jpg',
              description: 'Descripción del producto 4',
              stock: 4
            },
            {
              id: 5,
              title: 'Pantalla LED 24"',
              price: 2000,
              pictureUrl: '/pantalla.jpg',
              description: 'Descripción del producto 5',
              stock: 1
            }
          ]);
        }, 1000);
      });
    };

    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container my-4">Cargando productos...</div>;

  return (
    <div className="container my-4">
      <h2 className="mb-4">{greeting}</h2>
      <ItemList data={products} />
    </div>
  );
};

export default ItemListContainer;
