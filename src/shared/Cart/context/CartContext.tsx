import React, {createContext, SetStateAction, useState} from "react";
import {CartProduct} from "@/shared/Cart/types";


export const CartContext = createContext<{ cart: CartProduct[], setCart: React.Dispatch<SetStateAction<CartProduct[]>> }>({
    cart: [],
    setCart: () => {
    },
})

export function CartContextProvider({children}: {
    children?: React.ReactNode
}) {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart
            }}>
            {children}
        </CartContext.Provider>
    );
}