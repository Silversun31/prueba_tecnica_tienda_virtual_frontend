import { useCallback } from 'react';
import Cookies from 'js-cookie';

interface UseCookiesReturn {
    setCookie: (name: string, data: any, options?: Cookies.Options) => void;
    getCookie: (name: string) => any | null;
    removeCookie: (name: string, options?: Cookies.Options) => void;
}

/**
 * Custom hook to manage cookies.
 *
 * @returns {Object} An object containing functions to set, get, and remove cookies.
 * @returns {Function} setCookie - Function to set a cookie.
 * @returns {Function} getCookie - Function to get a cookie.
 * @returns {Function} removeCookie - Function to remove a cookie.
 */
export const useCookies = ():UseCookiesReturn => {
    /**
     * Sets a cookie with the given name and data.
     *
     * @param {string} name - The name of the cookie.
     * @param {any} data - The data to store in the cookie.
     * @param {Cookies.Options} [options] - Optional attributes for the cookie.
     */
    const setCookie = useCallback((name: string, data: any, options?: Cookies.Options) => {
        const jsonData = JSON.stringify(data);
        Cookies.set(name, jsonData, options);
    }, []);

    /**
     * Gets the data stored in a cookie by its name.
     *
     * @param {string} name - The name of the cookie.
     * @returns {any | null} The data stored in the cookie, or null if the cookie does not exist or cannot be parsed.
     */
    const getCookie = useCallback((name: string): any | null => {
        const jsonData = Cookies.get(name);
        if (!jsonData) {
            return null;
        }
        try {
            return JSON.parse(jsonData);
        } catch (e) {
            console.error('Error parsing JSON from cookie', e);
            return null;
        }
    }, []);

    /**
     * Removes a cookie by its name.
     *
     * @param {string} name - The name of the cookie.
     * @param {Cookies.CookieAttributes} [options] - Optional attributes for the cookie.
     */
    const removeCookie = useCallback((name: string, options?: Cookies.CookieAttributes) => {
        Cookies.remove(name, options);
    }, []);

    return { setCookie, getCookie, removeCookie };
};