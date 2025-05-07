import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ productDetail }) => {
  const [purchase, setPurchase] = useState(false)
  const { addToCart, itemQuantity } = useContext(CartContext)

  const onAdd = (cantidad) => {
    addToCart(productDetail, cantidad)
    setPurchase(true)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Agregaste ${productDetail.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const stockActualizado = productDetail.stock - itemQuantity(productDetail.id)

  return (
    <div>
      <h2>Detalle de: {productDetail.name}</h2>
      <img src={productDetail.img} alt={productDetail.name} />
      <p>{productDetail.description}</p>
      <p>Precio: ${productDetail.price},00</p>
      <p>Stock Disponible: {stockActualizado}</p>
      {
        purchase
          ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
          : <ItemCount stock={stockActualizado} onAdd={onAdd} />
      }
    </div>
  )
}

export default ItemDetail
