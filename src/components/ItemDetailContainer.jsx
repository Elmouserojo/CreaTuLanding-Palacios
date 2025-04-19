import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const mockProduct = {
          id: id,
          title: `Producto ${id}`,
          price: 1000 * id,
          pictureUrl: `https://via.placeholder.com/300?text=Producto+${id}`,
          description: `Descripción detallada del producto ${id}`,
          stock: 5
        };
        setProduct(mockProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="item-detail-container">Cargando...</div>;
  if (!product) return <div className="item-detail-container">Producto no encontrado</div>;

  return (
    <div className="item-detail-container">
      <div className="item-detail-wrapper">
        <Item {...product} showFullDescription={true} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
