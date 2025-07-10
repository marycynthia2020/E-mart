import { createContext, useState } from "react"

export  const CartContext = createContext()
const Context = ({children}) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem("cart") || [])
    const contextValue = {
        cartItems,
        setCartItems
    }
  return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
  )
}

export default Context