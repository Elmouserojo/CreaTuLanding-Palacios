import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([])

   const addToCart = (item,cantidad) => {

    if (isInCart(item.id)) {
        const cartUpdated = cart.map((prod) => {
            if (prod.id === item.id) {
                return {...prod, quantity: prod.quantity + cantidad}
            } else {
                return prod
            }
        })
        setCart(cartUpdated)
        return
    }
    setCart([...cart, {...item, quantity:cantidad}])
   }

   const clear= () => {
    setCart([])
   }

   const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
   }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}