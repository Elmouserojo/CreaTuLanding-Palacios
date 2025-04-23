import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({productDetail}) => {
    const {addToCart} = useContext(CartContext)

  const onAdd = (cantidad)=> {
    addToCart(productDetail, cantidad)
  }

  return (
    <div>
        <h2>Detalle de: {productDetail.name}</h2>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>Precio: ${productDetail.price},00</p>
        <p>Stock: {productDetail.stock}</p>
        <ItemCount stock={productDetail.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail