import React, {createContext, SetStateAction, useState} from "react";
import {CartProduct} from "@/shared/Cart/types";
import {useCookies} from "@/shared/Cart/hooks/useCookies";
import {CART_COOKIE_NAME} from "@/shared/Cart/useCart";


export const CartContext = createContext<{
    cart: CartProduct[],
    setCart: React.Dispatch<SetStateAction<CartProduct[]>>
}>({
    cart: [],
    setCart: () => {
    },
})

export function CartContextProvider({children}: {
    children?: React.ReactNode
}) {
    const {getCookie} = useCookies();
    const [cart, setCart] = useState(getCookie(CART_COOKIE_NAME) as CartProduct[])
    
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