import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, removeItem, clear, cartTotal } = useContext(CartContext)

    const preConfirmation = () => {
        Swal.fire({
            title: '¿Estás seguro que querés borrar todo el carrito?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.isConfirmed) {
                clear()
            }
        })
    }

    return (
        <div>
          <h1>Tu Carrito</h1>
          <div>
            {cart.map((compra) => (
              <div className="compra-item" key={compra.id}>
                <img src={compra.img} alt={compra.name} className="compra-img" />
                <div className="compra-info">
                  <h5 className="compra-nombre">{compra.name}</h5>
                  <p>Cantidad: {compra.quantity}</p>
                  <p>Precio unitario: ${compra.price},00</p>
                  <p><strong>Total: ${compra.quantity * compra.price},00</strong></p>
                </div>
                <button className="btn btn-danger eliminar" onClick={() => removeItem(compra.id)}>X</button>
              </div>
            ))}
          </div>
          <span>Total a pagar: ${cartTotal()}</span>
          <div style={{ marginTop: '1rem' }}>
            <button className="btn btn-danger" onClick={preConfirmation}>Borrar todo el carrito</button>
            <Link to='/checkout' className="btn btn-primary" style={{ marginLeft: '1rem' }}>Terminar compra</Link>
          </div>
        </div>
      );
      
}

export default CartView
