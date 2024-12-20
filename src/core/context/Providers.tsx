"use client";

import React from 'react';
import {ApiServicesContextProvider} from "@/core/context/ApiService/ApiServicesContext";
import {CartContextProvider} from "@/shared/Cart/context/CartContext";

const Providers = ({
                       children,
                   }: {
    children: React.ReactNode
}) => {

    return (
        <CartContextProvider>
            <ApiServicesContextProvider>
                {children}
            </ApiServicesContextProvider>
        </CartContextProvider>
    )
}

export default Providers;