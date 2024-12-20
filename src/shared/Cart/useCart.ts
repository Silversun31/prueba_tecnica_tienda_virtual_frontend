import {useCallback, useContext, useEffect} from 'react';
import {useCookies} from "./hooks/useCookies";
import {BaseCartProduct, CartProduct} from "@/shared/Cart/types";
import {CartContext} from "@/shared/Cart/context/CartContext";

const COOKIE_NAME = 'shopping_cart';

interface UseCartReturn {
    cart: CartProduct[];
    addProduct: (product: BaseCartProduct) => void;
    removeProduct: (productId: number) => void;
    updateProductQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

/**
 * Custom hook to manage a shopping cart with persistence in cookies.
 *
 * @returns {Object} An object containing the cart state and functions to manipulate the cart.
 * @returns {Array} cart - The current state of the shopping cart.
 * @returns {Function} addProduct - Function to add a product to the cart.
 * @returns {Function} removeProduct - Function to remove a product from the cart.
 * @returns {Function} updateProductQuantity - Function to update the quantity of a product in the cart.
 * @returns {Function} clearCart - Function to clear the cart.
 */
export const useCart = (): UseCartReturn => {
    const {setCookie, getCookie, removeCookie} = useCookies();
    const {cart, setCart} = useContext(CartContext)

    useEffect(() => {
        const savedCart = getCookie(COOKIE_NAME);
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    useEffect(() => {
        setCookie(COOKIE_NAME, cart);
    }, [cart]);

    /**
     * Adds a product to the cart.
     *
     * @param {Object} product - The product to add.
     */
    const addProduct = useCallback((product: BaseCartProduct, quantity: number = 1) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(p => p.id === product.id);
            if (productExists) {
                return prevCart.map(p =>
                    p.id === product.id ? {...p, quantity: p.quantity + quantity} : p
                );
            }
            return [...prevCart, {...product, quantity}];
        });
    }, []);
    /**
     * Removes a product from the cart by its ID.
     *
     * @param {string} productId - The ID of the product to remove.
     */
    const removeProduct = useCallback((productId: number) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    }, []);

    /**
     * Updates the quantity of a product in the cart.
     *
     * @param {string} productId - The ID of the product to update.
     * @param {number} quantity - The new quantity of the product.
     */
    const updateProductQuantity = useCallback((productId: number, quantity: number) => {
        setCart((prevCart) => prevCart.map(product =>
            product.id === productId ? {...product, quantity} : product
        ));
    }, []);

    /**
     * Clears the cart and removes the cart cookie.
     */
    const clearCart = useCallback(() => {
        setCart([]);
        removeCookie(COOKIE_NAME);
    }, [removeCookie]);

    return {cart, addProduct, removeProduct, updateProductQuantity, clearCart};
};