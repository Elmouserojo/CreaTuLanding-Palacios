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
              title: 'Producto 1',
              price: 1000,
              pictureUrl: 'https://via.placeholder.com/300',
              description: 'Descripción del producto 1',
              stock: 5
            },
            {
              id: 2,
              title: 'Producto 2',
              price: 1500,
              pictureUrl: 'https://via.placeholder.com/300',
              description: 'Descripción del producto 2',
              stock: 3
            },
            {
              id: 3,
              title: 'Producto 3',
              price: 2000,
              pictureUrl: 'https://via.placeholder.com/300',
              description: 'Descripción del producto 3',
              stock: 0
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
