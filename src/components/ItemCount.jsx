import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const substract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            {stock === 0 ? (
                <p>Lo sentimos, no hay stock disponible 😭</p>
            ) : (
                <div>
                    <div>
                        <button className='btn btn-danger' onClick={substract}>-</button>
                        <span className='btn'>{count}</span>
                        <button className='btn btn-success' onClick={add}>+</button>
                    </div>
                    <button className='btn btn-primary' onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                </div>
            )}
        </div>
    )
}

export default ItemCount
