import {useCallback, useContext, useEffect} from 'react';
import {useCookies} from "./hooks/useCookies";
import {BaseCartProduct, CartProduct} from "@/shared/Cart/types";
import {CartContext} from "@/shared/Cart/context/CartContext";
import useNotificationService from "@/services/Notification";

const COOKIE_NAME = 'shopping_cart';

interface UseCartReturn {
    cart: CartProduct[];
    addProduct: (product: BaseCartProduct, quantity?: number) => void;
    removeProduct: (productId: number) => void;
    updateProductQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    increaseProductQuantity: (productId: number) => void;
    decreaseProductQuantity: (productId: number) => void;
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
    const NotificationSrv = useNotificationService()

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
        NotificationSrv.notify(`Producto "${product.title}" agregado al carrito`, {type: 'success'});
    }, []);
    /**
     * Removes a product from the cart by its ID.
     *
     * @param {string} productId - The ID of the product to remove.
     */
    const removeProduct = useCallback((productId: number) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
        NotificationSrv.notify(`Producto eliminado del carrito`, {type: 'success'});
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
        NotificationSrv.notify(`Carrito limpiado`, {type: 'success'});
    }, [removeCookie]);
    /**
     * Increases the quantity of a product in the cart by 1.
     *
     * @param {number} productId - The ID of the product to increase the quantity.
     */
    const increaseProductQuantity = useCallback((productId: number) => {
        setCart((prevCart) => prevCart.map(product =>
            product.id === productId ? {...product, quantity: product.quantity + 1} : product
        ));
    }, []);

    /**
     * Decreases the quantity of a product in the cart by 1.
     * If the quantity reaches 0, the product is removed from the cart.
     *
     * @param {number} productId - The ID of the product to decrease the quantity.
     */
    const decreaseProductQuantity = useCallback((productId: number) => {
        setCart((prevCart) => prevCart.map(product =>
            product.id === productId ? {...product, quantity: product.quantity - 1} : product
        ).filter(product => product.quantity > 0
        ));
    }, []);
    return {
        cart,
        addProduct,
        removeProduct,
        updateProductQuantity,
        clearCart,
        increaseProductQuantity,
        decreaseProductQuantity
    };
};