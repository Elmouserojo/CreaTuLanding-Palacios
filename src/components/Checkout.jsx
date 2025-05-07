import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, clear, cartTotal } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        if (!buyer.name || !buyer.lastname || !buyer.email) {
            alert('Todos los campos son requeridos')
        } else if (buyer.email !== validateEmail) {
            alert('Los correos no coinciden')
        } else {
            const order = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }

            const ventas = collection(db, 'orders')

            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div>
            {orderId ? (
                <div>
                    <h2>Realizaste tu compra, el ID es: {orderId}</h2>
                </div>
            ) : (
                <div>
                    <h1>Completá tus datos</h1>
                    <form onSubmit={finalizarCompra}>
                        <input type="text" name="name" placeholder="Nombre" onChange={buyerData} />
                        <input type="text" name="lastname" placeholder="Apellido" onChange={buyerData} />
                        <input type="email" name="email" placeholder="Correo electrónico" onChange={buyerData} />
                        <input
                            type="email"
                            name="second-email"
                            placeholder="Repetir correo electrónico"
                            onChange={(e) => setValidateEmail(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Checkout
